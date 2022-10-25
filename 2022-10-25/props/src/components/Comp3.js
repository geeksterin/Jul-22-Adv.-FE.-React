import Comp4 from './Comp4';

const Comp3 = ({data}) => {
  return (
    <>
      <h2>Component 3 {data}</h2>
      <Comp4 data={data} />
    </>
  )
}

export default Comp3;