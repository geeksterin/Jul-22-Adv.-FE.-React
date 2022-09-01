const ColorContainer = (props) => {

  const styling = {
    backgroundColor: props.color,
    height: "100px",
    width: "100px",
    display: "inline-block",
    margin: "5px"
  }

  return (
    <div style={styling}></div>
  )
}

export default ColorContainer;