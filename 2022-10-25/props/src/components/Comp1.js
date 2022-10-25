import Comp2 from './Comp2';

const Comp1 = ({data}) => {
  return (
    <>
      <h2>Component 1 {data}</h2>
      <Comp2 data={data} />
    </>
  )
}

export default Comp1;