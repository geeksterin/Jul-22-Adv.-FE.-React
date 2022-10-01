import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
