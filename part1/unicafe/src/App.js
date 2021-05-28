
import { useState } from 'react';
import './App.css';

function App() {

  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const Button = ({handleClick, text}) => {
    return(
    <button onClick={handleClick}>{text}</button>
    )}
  const handleGoodClick = () => {
    return (
    setGood(good + 1)
    )
  }
  const handleNeutralClick = () => {
    return(
    setNeutral(neutral + 1)
    )
  }
  const handleBadClick = () => {
    return(
    setBad(bad + 1)
    )}

  const Content = ({good, neutral, bad}) => {
    const average = (good + neutral + bad) / 3
    const positive = good / (good + neutral + bad)
    return(
    <>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good + neutral + bad}</p>
    <p>average {average}</p>
    <p>positive {positive}%</p>
    </>
    )}

  return (
    <div className="App">
     <h1>Give Feedback</h1>
     <Button handleClick={handleGoodClick} text="good" />
     <Button handleClick={handleNeutralClick} text="neutral" />
     <Button handleClick={handleBadClick} text="bad" />
     <h1>Statistics</h1>
     <Content good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
