import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 01</h2>
      <p>WVU ID: 800425025</p>
      <p>Hi I am Wesley Forest</p>
        <div className="card-container">
          <Card title = "Dogs" content = "Dogs are domestic mammals in the canine family "> </Card>

          <Card title = "Cats" content = "Cats are domestic mammals in the feline family"> </Card>

          <Card title = "Rats" content = "Rats are mammals in the rodent family"> </Card>
        </div>
    </div>
  );
}

export default App;
