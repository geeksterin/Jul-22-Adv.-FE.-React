import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Nav from './components/Nav';
import Data from './pages/Data';

function App() {
  const [count, setCount] = useState(0);

  const inc = _ => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={inc}>Click Me</button>
        <p>{count}</p> */}
        <Nav />
        <Routes>
          <Route path='/' element={<h2>Homepage...</h2>} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/data/:key1' element={<Data />} />
          <Route path='*' element={<h2>40444444</h2>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
