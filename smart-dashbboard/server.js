const express = require("express");
const app = express();
app.use(express.json());

// ===== INITIAL DATA =====
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

let notes = [
  {
    id: 1,
    title: "Meeting Notes",
    text: "Discuss roadmap and budget",
    userId: 1,
  },
  { id: 2, title: "Weekly Summary", text: "Completed sprint 5", userId: 1 },
];

// ===== USERS CRUD =====
app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const user = { id: newId, name };
  users.push(user);
  res.status(201).json(user);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
});

app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  const { name } = req.body;
  if (name) user.name = name;

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  notes = notes.filter((n) => n.userId !== id);
  res.status(204).send();
});

// ===== NOTES CRUD =====
app.post("/notes", (req, res) => {
  const { title, text, userId } = req.body;
  if (!title || !text || !userId)
    return res
      .status(400)
      .json({ error: "Title, text, and userId are required" });

  const user = users.find((u) => u.id === userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  const newId = notes.length ? Math.max(...notes.map((n) => n.id)) + 1 : 1;
  const note = { id: newId, title, text, userId };
  notes.push(note);
  res.status(201).json(note);
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ error: "Note not found" });

  res.json(note);
});

app.put("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ error: "Note not found" });

  const { title, text } = req.body;
  if (title) note.title = title;
  if (text) note.text = text;

  res.json(note);
});

app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter((n) => n.id !== id);
  res.status(204).send();
});

// Get all notes for a specific user
app.get("/users/:id/notes", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  const userNotes = notes.filter((n) => n.userId === userId);
  res.json(userNotes);
});

// ===== START SERVER =====
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
