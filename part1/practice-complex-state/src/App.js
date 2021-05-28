import { useState } from 'react';
import './App.css';

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
  }


  return(
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App;
