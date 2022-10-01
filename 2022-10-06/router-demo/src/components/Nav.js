import { Link } from 'react-router-dom';

const Nav = _ => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      &emsp;
      <Link to="/about">
        <button>About</button>
      </Link>
      &emsp;
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  )
}

export default Nav;