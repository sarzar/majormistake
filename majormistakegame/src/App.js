import Home from "./components/Home"
import Howtoplay from "./components/Howtoplay"
import Popup from './components/Popup'
import { useState } from 'react'
import './App.css';

function App() {

  const [popup, setPopup] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <Howtoplay/>
        <br/>
        <button onClick={() => setPopup(true)}>Start Game</button>
        
        <div className="popup-content">
        <Popup trigger={popup} setTrigger={setPopup}>
          <h3>Test</h3>
          <p>Popup content</p>
        </Popup>
        </div>
        
      </header>
    </div>
  );
}

export default App;
