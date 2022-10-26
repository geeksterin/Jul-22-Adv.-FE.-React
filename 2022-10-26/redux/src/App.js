import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';
import { useDispatch } from 'react-redux';
import { setValue } from './slice';

function App() {
  const dispatch = useDispatch();

  const dataChanged = e => {
    const data = e.target.value;
    dispatch(setValue(data));
  }

  return (
    <div className="App">
      <header className="App-header">

        <input type="text" onKeyUp={dataChanged} />
        
        <CompA />
      </header>
    </div>
  );
}

export default App;
