// import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

//import <ComponentName> from '<relative/path>';

function App() {
  const btnClicked = _ => {
    alert("Button is clicked");
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={btnClicked}>Click me</button>
        <hr />
        <MyButton />
      </header>
    </div>
  );
}

export default App;
