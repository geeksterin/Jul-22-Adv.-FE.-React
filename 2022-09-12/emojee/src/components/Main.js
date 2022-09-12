import {useState, useEffect} from 'react';
import emojiList from "../emojiList";

const Main = () => {
  const [list, setList] = useState(emojiList);
  const [keyword, setKeyword] = useState("");

  const typed = (e) => {
    const value = e.target.value;
    setKeyword(value);
  }

  useEffect(_ => {
    console.log(`Keyword changed - ${keyword}`);
  }, [keyword]);

  return (
    <main>
      <input type="text" placeholder="Filter 🔎" onKeyUp={typed}/>

      <h3>Result for - {keyword} </h3>

      <hr />
      {list.map((singleEmoji, idx) => {
        return (
          <p key={idx}>{singleEmoji.emoji} - {singleEmoji.description}</p>
        )
      })}
    </main>
  )
}

export default Main;