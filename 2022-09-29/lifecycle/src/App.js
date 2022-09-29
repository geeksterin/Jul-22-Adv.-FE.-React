import { useEffect, useState } from 'react';
import './App.css';
import Child from './components/Child';

function App() {
  const [showChild, setShowChild] = useState(false);

  //Mounting
  useEffect(_ => {
    console.log("This is mounting of Parent");
  }, []);

  //Updating
  useEffect(_ => {
    console.log("Parent is updated");
  }, [showChild]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="checkbox" onChange={e => setShowChild(e.target.checked)} />
        {showChild === true ? <Child /> : false}
      </header>
    </div>
  );
}

export default App;
