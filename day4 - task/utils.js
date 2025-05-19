import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);
const usersDir = path.join(__dirname, "users");
console.log(usersDir);
let id = 3;

async function ensureUsersDir() {
  try {
    await fs.mkdir(usersDir);
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
}

export async function getAllUsers() {
  await ensureUsersDir();
  const files = await fs.readdir(usersDir);
  console.log(files);
  const users = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(usersDir, file), "utf-8");
      console.log(content);
      return JSON.parse(content);
    })
  );
  return users;
}

export async function getUserById(id) {
  const filePath = path.join(usersDir, `${id}.json`);
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}

export async function createUser() {
  const filePath = path.join(usersDir, `${++id}.json`);
  try {
    const file = await fs.writeFile(
      `${filePath}`,
      `{ "id": ${id}, "name": "devi", "email": "devi@example.com"}`
    );
    return file;
  } catch (err) {
    return null;
  }
}

export async function putUser() {
  let a = 10;
  console.log(a);
}

export async function patchUser(id, name, email) {
  const filePath = path.join(usersDir, `${id}.json`);
  try {
    const file = await fs.writeFile(
      `${filePath}`,
      `{ "id": ${id}, "name": "${name}", "email": "${email}"}`
    );
    return file;
  } catch (err) {
    return null;
  }
}
export async function delUser(id) {
  const filePath = path.join(usersDir, `${id}.json`);
  try {
    const file = await fs.unlink(`${filePath}`);
    return file;
  } catch (err) {
    return null;
  }
}
