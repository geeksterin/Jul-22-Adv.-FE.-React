const Red = ({ children, color }) => {

  return (
    <span style={{color: `${color !== undefined ? color : "red"}`}}>
      {children}
    </span>
  );
}

export default Red;