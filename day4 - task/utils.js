import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);
const usersDir = path.join(__dirname, 'users');
console.log(usersDir);

async function ensureUsersDir() {
  try {
    await fs.mkdir(usersDir);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

export async function getAllUsers() {
  await ensureUsersDir();
  const files = await fs.readdir(usersDir);
  console.log(files)
  const users = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(usersDir, file), 'utf-8');
      console.log(content)
      return JSON.parse(content);

    })
  );
  return users;
}

export async function getUserById(id) {
  const filePath = path.join(usersDir, `${id}.json`);
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}