import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>Register</h2>
      </header>
      <div className="body">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter username" />
        <input type="text" id="username" name="username" placeholder="Enter your password"/>
        <button type="submit">Submit</button>
        
      </div>
      <div className='footer'>
        <button type="login" link='index.js'>Login</button>
      </div>
    </div>
  );
}

export default App;
