import Comp3 from './Comp3';

const Comp2 = ({data}) => {
  return (
    <>
      <h2>Component 2 {data}</h2>
      <Comp3 data={data} />
    </>
  )
}

export default Comp2;