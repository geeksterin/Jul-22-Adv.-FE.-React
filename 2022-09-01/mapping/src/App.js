import logo from './logo.svg';
import './App.css';
import ColorContainer from './components/ColorContainer';

function App() {

  const colors = ["red", "green", "blue", "yellow", "orange", "pink"]; 


  return (
    <div>
      {/* <ColorContainer color="red" />
      <ColorContainer color="green" />
      <ColorContainer color="blue" />
      <ColorContainer color="yellow" />
      <ColorContainer color="orange" />
      <ColorContainer color="pink" /> */}

      {colors.map((element, idx) => {
        return (
          <ColorContainer color={element} key={idx} />
        )
      })}
    </div>
  );
}

export default App;
