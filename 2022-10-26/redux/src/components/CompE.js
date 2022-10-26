import { useSelector } from 'react-redux';

const CompE = _ => {
  const text = useSelector(state => state.text);

  return (
    <>
      <h5>Component E</h5>
      <p>Value -&gt; {text}</p>
    </>
  )
}

export default CompE;