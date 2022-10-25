import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import { useRef } from 'react';

function App() {
  const testRef = useRef();

  const btnClicked = _ => {
    console.log(testRef.current);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Test ref={testRef} />
        <button onClick={btnClicked}>Console</button>
      </header>
    </div>
  );
}

export default App;
