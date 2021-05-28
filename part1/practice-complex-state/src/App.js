import { useState } from 'react';
import './App.css';

  const History = (props) => {
    if(props.allClicks.length === 0) {
      return (
        <div>
          This app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        Button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  const Button = ({handleClick, text}) => {
    return(
      <button onClick={handleClick}>{text}</button>
    )
  }

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
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
