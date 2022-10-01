import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [abcd, setABCD] = useState(0);

  useEffect(_ => {
    console.log("ABCD", abcd);
    setABCD(c => c + 1);
  }, [abcd]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={_ => setABCD(c => c + 1)}>ABCD</button>
      </header>
    </div>
  );
}

export default App;
