import { useContext } from "react";
import { contextMain } from "../contexts";
const CompE = _ => {
  const data = useContext(contextMain);

  return (
    <>
      <h2>Component E -&gt; {data}</h2>
      {/* <contextMain.Consumer>
        {data => {
          return (
            <span>{data}</span>
          )
        }}
      </contextMain.Consumer> */}
    </>
  )
}

export default CompE;