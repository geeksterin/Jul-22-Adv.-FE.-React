import { useParams } from "react-router-dom";

const Data = _ => {

  const params = useParams();
  console.log(params);

  return(
    <>
      <h2>Data page...</h2>
    </>
  )
}

export default Data;