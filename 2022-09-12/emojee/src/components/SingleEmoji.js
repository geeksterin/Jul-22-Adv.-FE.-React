const SingleEmoji = ({singleEmoji}) => {
  return (
    <div className="item">
      <p className="emoji">{singleEmoji.emoji}</p>
      <p>{singleEmoji.description}</p>
    </div>
  )
}

export default SingleEmoji;