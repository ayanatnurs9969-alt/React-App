import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

const API = 'http://localhost:4000/api';

function Login({ onSwitch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Ошибка входа');
        return;
      }

      localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/ratatype/index.html';
    } catch (err) {
      setError('Сервер недоступен. Запустите npm run server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="header">
        <h2>Login</h2>
      </header>

      <form className="body" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Входим...' : 'Submit'}
        </button>
      </form>

      <div className="footer">
        <span>Нет аккаунта?</span>
        <button type="button" className="link-btn" onClick={onSwitch}>
          Register
        </button>
      </div>
    </>
  );
}

function Register({ onSwitch }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Ошибка регистрации');
        return;
      }

      localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/ratatype/index.html';
    } catch (err) {
      setError('Сервер недоступен. Запустите npm run server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="header">
        <h2>Register</h2>
      </header>

      <form className="body" onSubmit={handleSubmit}>
        <label htmlFor="reg-username">Username</label>
        <input
          type="text"
          id="reg-username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="reg-email">Email</label>
        <input
          type="email"
          id="reg-email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="reg-password">Password</label>
        <input
          type="password"
          id="reg-password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Создаём...' : 'Submit'}
        </button>
      </form>

      <div className="footer">
        <span>Уже есть аккаунт?</span>
        <button type="button" className="link-btn" onClick={onSwitch}>
          Login
        </button>
      </div>
    </>
  );
}

function App() {
  const [page, setPage] = useState('login');

  return (
    <div className="App">
      <div className="grain" />
      <div className="scanlines" />

      {page === 'login' ? (
        <Login onSwitch={() => setPage('register')} />
      ) : (
        <Register onSwitch={() => setPage('login')} />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
