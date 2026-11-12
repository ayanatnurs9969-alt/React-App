const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

function hash(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

/* ---------- регистрация ---------- */
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ error: 'Укажите имя и пароль' });
  }

  try {
    const stmt = db.prepare(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)'
    );
    const info = stmt.run(username.trim(), email ? email.trim() : null, hash(password));

    return res.status(201).json({
      id: info.lastInsertRowid,
      username: username.trim(),
    });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({ error: 'Такой пользователь уже существует' });
    }
    console.error(err);
    return res.status(500).json({ error: 'Ошибка сервера' });
  }
});

/* ---------- вход ---------- */
app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ error: 'Укажите имя и пароль' });
  }

  const user = db
    .prepare('SELECT id, username, email, password FROM users WHERE username = ?')
    .get(username.trim());

  if (!user || user.password !== hash(password)) {
    return res.status(401).json({ error: 'Неверное имя или пароль' });
  }

  return res.json({
    id: user.id,
    username: user.username,
    email: user.email,
  });
});

/* ---------- список пользователей (для проверки) ---------- */
app.get('/api/users', (req, res) => {
  const users = db
    .prepare('SELECT id, username, email, created_at FROM users ORDER BY id DESC')
    .all();
  res.json(users);
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`API сервер: http://localhost:${PORT}`);
});
