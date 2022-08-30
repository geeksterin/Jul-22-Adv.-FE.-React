import '../App.css';

function MyComponent(props) {

  function abcd() {
    
  }

  abcd();

  console.log(props);

  return (
    <button>{props.abcd}</button>
  )
}

export default MyComponent;


// ✔️
// return <button>Click me</button>

// ✔️
// return (<button>Click me</button>)

// ✔️
// return (
//   <button>Click me</button>
// )


// ❌
/*
return 
    <button>Click me</button>

*/


// return <h2></h2><h3></h3>
// return [1, 2]; //return {k: 1, l: 2}