import logo from './logo.svg';
import './App.css';
import Widget from './Widget';
import { useState } from 'react';

function App() {
  const [open, setopen] = useState(false);

  function showWidget() {
    setopen(true);
  }
  function fun() {
    alert('done');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click the following link to open eKYC widget</p>
        <span className="App-link" onClick={showWidget}>
          Open Widget
        </span>
        {open && <Widget trigger={setopen} />}
      </header>
    </div>
  );
}

export default App;
