import { forwardRef } from "react";

const Test = (_, ref) => {
  return (
    <div>
      <h2 ref={ref}>Test Component</h2>
      <button>ABCD</button>
    </div>
  )
}

export default forwardRef(Test);