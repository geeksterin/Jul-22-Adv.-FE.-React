import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import CompA from './components/CompA';
import { contextMain } from './contexts';

function App() {
  const data = "ABCD"
  return (
    <div className="App">
      <header className="App-header">
        <h2>{data} -&gt; App</h2>
        {/* <Comp1 data={data} /> */}
        <contextMain.Provider value={data}>
          <CompA />
        </contextMain.Provider>
      </header>
    </div>
  );
}

export default App;