import Comp5 from './Comp5';

const Comp4 = ({data}) => {
  return (
    <>
      <h2>Component 4 {data}</h2>
      <Comp5 data={data} />
    </>
  )
}

export default Comp4;