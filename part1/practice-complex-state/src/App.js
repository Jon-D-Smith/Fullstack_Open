import { useState } from 'react';
import './App.css';

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return(
    <div>
      {left}
      <button onClick={()=> setLeft(left + 1)}>Left</button>
      <button onClick={()=> setRight(right + 1)}>Right</button>
      {right}
    </div>
  )
}

export default App;
