import {useState, useEffect} from 'react';
import emojiList from "../emojiList";
import EmojiContainer from './EmojiContainer';

const Main = () => {
  const [list, setList] = useState(emojiList);
  const [keyword, setKeyword] = useState("");

  const typed = (e) => {
    const value = e.target.value.toLowerCase();
    setKeyword(value);
  }

  useEffect(_ => {
    //Filter based on description, category, alases
    const filterList = emojiList.filter(singleEmoji => {
      if(singleEmoji.description.startsWith(keyword)) {
        return true;
      }
      
      if(singleEmoji.category.startsWith(keyword)) {
        return true;
      }

      if(singleEmoji.aliases.some(e => e.startsWith(keyword))) {
        return true;
      }

      return false;
    });

    setList(filterList);
  }, [keyword]);

  return (
    <main>
      <input type="text" placeholder="Filter 🔎" onKeyUp={typed}/>

      <h3>Result for - {keyword} </h3>

      <hr />
      {list.length === 0 ? (
        <p>No Emoji Found</p>

      ) : (

        <EmojiContainer list={list} />

      )}


      
    </main>
  )
}

export default Main;