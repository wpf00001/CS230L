import logo from './logo.svg';
import './App.css';
import './Navbar.js';
import './Card.js';
function App() {
  return (
    <div className="App">
      <h1>CS 230L</h1>
      <h2>Section - 01</h2>
      <p>WVU ID: 800425025</p>
      <p>Hi I am </p>
      {createCard()}
    </div>
  );
}

export default App;
