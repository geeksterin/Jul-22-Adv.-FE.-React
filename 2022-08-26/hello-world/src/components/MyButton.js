const MyButton = () => {
  const clicked = _ => {
    console.log("My button clicked");
  }
  return (
    <button onClick={clicked}>This is my button</button>
  );
}

export default MyButton;