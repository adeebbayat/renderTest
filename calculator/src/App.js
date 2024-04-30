import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Row from './components/Row';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [toDisplay,setToDisplay] = useState(0)
  
  const type = (number) => {
    setToDisplay(parseInt(toDisplay.toString() + number.toString()))
  }

  return (
    <div className="App">
      <Display toDisplay = {toDisplay}/>
      <Row start={1} type={type}/>
      <Row start={4} type={type}/>
      <Row start={7} type={type}/>
    </div>
  );
}

export default App;
