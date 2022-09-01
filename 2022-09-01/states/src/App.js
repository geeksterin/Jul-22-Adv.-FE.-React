import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const traceable = useState(0);
  //[0, function() {}]

  const counter = traceable[0];
  const updateCounter = traceable[1];

  const inc = _ => {
    updateCounter((current_value) => {
      const new_value = current_value + 1;
      return new_value;
    });
    // counter = counter + 1;
    // console.log(counter);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={inc}>Click me</button>
        <p>Clicked: {counter} times</p>
      </header>
    </div>
  );
}

export default App;
