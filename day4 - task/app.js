import express from 'express';
import { getAllUsers, getUserById } from './utils.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
  const { name } = req.query;
  
  let users = await getAllUsers();

  if (name) {
    const nameLower = name.toLowerCase();
    users = users.filter((u) => u.name.toLowerCase().includes(nameLower));
  }

  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.get('/users/search', async (req, res) => {
  const { names } = req.query;

  if (!names) {
    return res.status(400).json({ error: 'Query parameter "names" is required' });
  }

  const nameArray = Array.isArray(names) ? names : [names];
  const users = await getAllUsers();

  const matchedUsers = users.filter((u) =>
    nameArray.some((n) => u.name.toLowerCase() === n.toLowerCase())
  );

  res.json(matchedUsers);
});

app.listen(port, () => {
  console.log(`User Management API running at http://localhost:${port}`);
});