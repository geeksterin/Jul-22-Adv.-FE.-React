import { useEffect } from 'react';

const Child = () => {

  const fetchAPI = async _ => {
    const response = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000");
    const data = await response.json();
    console.log(data);
  }

  //Mounting
  useEffect(_ => {
    console.log("Child is mounted");
  }, []);

  //Mounting + Unmounting
  useEffect(_ => {
    const intervalID = setInterval(fetchAPI, 2000);

    const cleanUp = _ => {
      console.log("The child componet is unmounted... Stopping API Calls");
      clearInterval(intervalID);
    }

    return cleanUp;

  }, []);

  return (
    <p>This is child</p>
  )
}

export default Child;