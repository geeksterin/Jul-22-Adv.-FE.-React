import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(_ => {
    (async _ => {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      setList(data.data);
    })();
  }, []);

  return (
    <div>
      <h2>Sample API Call</h2>
      <ul>
      {list.map((e, idx) => {
        return (
          <li key={idx}>{e.first_name} {e.last_name} ({e.email})</li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
