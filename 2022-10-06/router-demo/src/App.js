import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <video controls={true} width="400" loop={true}>
          <source src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm' type='video/webm' />
        </video>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
          <Route path='/home/about/contact' element={<h2>Custom</h2>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
