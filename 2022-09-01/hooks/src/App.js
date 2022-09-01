import logo from './logo.svg';
import './App.css';
import { useTime } from 'react-timer-hook';

function App() {
  const time = useTime({format: "12-hour"});

  // console.log(time);

  return (
    <div className="App">
      <header className="App-header">
        <p>Time: {time.hours}:{time.minutes}:{time.seconds}</p>
      </header>
    </div>
  );
}

export default App;
