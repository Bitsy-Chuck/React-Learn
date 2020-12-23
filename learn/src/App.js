import './App.css';
import PopUp from "./Components/PopUp"
import React, {useState} from 'react'
function App() {
  function showIt(){
    console.log(display)
    setDisplay(!display);
  }
  const [display, setDisplay]=useState(false);
  return (
    <div className="App">
      <button onClick={showIt}>Show popup</button>
      <PopUp display={display} showIt={showIt}/>
    </div>
  );
}

export default App;

