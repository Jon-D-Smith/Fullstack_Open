import './App.css';
import {useState} from 'react';
const App = () => {

  const [counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  const Display = ({counter}) => <div>{counter}</div>

  const Button = ({handleClick, text}) => {
    return (
    <button onClick={handleClick}>
      {text}
    </button>
    )}

  return (
    <>
    <Display counter={counter} />
    <Button handleClick={increaseByOne} text="Plus" />
    <Button handleClick={setToZero} text="reset" />
    <Button handleClick={decreaseByOne} text="subtract" />
    </>
  );
}

export default App;
