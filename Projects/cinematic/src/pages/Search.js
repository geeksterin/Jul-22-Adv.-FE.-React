import { useEffect, useState } from 'react';
import { omdb } from '../utils';

const Search = _ => {

  const [list, setList] = useState([]);

  useEffect(_ => {
    (async _ => {
      const response =  await omdb.get("?s=Mission Impossible");
      setList(response.data.Search);
    })();
  })

  return (
    <>
    {list.map((e, idx) => {
      return <p key={idx}>{e.Title}</p>
    })}
    </>
  )
}

export default Search;