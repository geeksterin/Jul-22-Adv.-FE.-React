import SingleEmoji from "./SingleEmoji";

const EmojiContainer = ({list}) => {

  return (
    <div className="container">
      {list.map((singleEmoji, idx) => {
        console.log(singleEmoji);
        return (
          <SingleEmoji key={idx} singleEmoji={singleEmoji} />
        )
      })}
    </div>
  )
}

export default EmojiContainer;