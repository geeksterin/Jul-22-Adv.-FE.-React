import { useRef } from 'react';

const Search = ({ searchedUsername }) => {

  const inputRef = useRef();

  const searched = e => {
    e.preventDefault();
    // console.log(e);
    const searchKeyword = inputRef.current.value;
    searchedUsername(searchKeyword);
  }

  return (
    <div className='card search'>
      <form onSubmit={searched}>
        <input type="text" ref={inputRef} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Search;