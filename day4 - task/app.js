import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  putUser,
  patchUser,
  delUser,
} from "./utils.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", async (req, res) => {
  const { name } = req.query;

  let users = await getAllUsers();

  if (name) {
    const nameLower = name.toLowerCase();
    users = users.filter((u) => u.name.toLowerCase().includes(nameLower));
  }

  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

app.get("/users/search", async (req, res) => {
  const { names } = req.query;

  if (!names) {
    return res
      .status(400)
      .json({ error: 'Query parameter "names" is required' });
  }

  const nameArray = Array.isArray(names) ? names : [names];
  const users = await getAllUsers();

  const matchedUsers = users.filter((u) =>
    nameArray.some((n) => u.name.toLowerCase() === n.toLowerCase())
  );

  res.json(matchedUsers);
});

app.post("/user", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email are required" });

  const newUser = await createUser({ name, email });
  res.status(201).json(newUser);
});

app.put("/putuser", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email are required" });

  const newUser = await putUser();
  res.status(201).json(newUser);
});

app.patch("/users/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email are required" });

  const newUser = await patchUser(id, name, email);
  res.status(201).json(newUser);
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const newUser = await delUser(id);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`User Management API running at http://localhost:${port}`);
});
