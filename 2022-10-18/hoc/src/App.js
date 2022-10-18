import logo from './logo.svg';
import './App.css';
import Red from './components/Red';
import useInternetStatus from './hooks/useInternetStatus';
import Online from './components/Online';
import Offline from './components/Offline';
import Game from 'react-dinosaur-game';

function App() {
  const internetConnected = useInternetStatus();

  return (
    <div className="App">
      <header className="App-header">
        {internetConnected ? <Online /> : <Offline />}


        {/* <Red color="blue">
          <p>This is a para</p>
        </Red>

        <Red>
          <button>Click me</button>
        </Red>

        <Red>
          <h2>Heading</h2>
          <h3>Another heading</h3>
        </Red>

        <Red /> */}
      </header>
    </div>
  );
}

export default App;
