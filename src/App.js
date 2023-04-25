import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
      <a href="/Home" onClick={navigate}>
        Home
      </a>
      <a href="/about" onClick={navigate}>
        About
      </a>
      <a href="/contact" onClick={navigate}>
        Contact
      </a>
    </nav>
    </div>
  );
}

export default App;
