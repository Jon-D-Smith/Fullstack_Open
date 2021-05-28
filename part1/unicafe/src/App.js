
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


  const Content = () => {
    
    return(
    <>
    <h1>Give Feedback</h1>
     <Button handleClick={() => setGood(good + 1)} text="good" />
     <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
     <Button handleClick={() => setBad(bad + 1)} text="bad" />
    </>
    )}

  const Statistic = ({text, stat}) => {
      return(
        <tr>
          <td>{text}</td>
          <td>{stat}</td>
        </tr>
      )
    }

  const Statistics = () => {
    const all = good + neutral + bad
    const average = (1 / all) * (good - bad)
    const positive = (good / all) * 100
    if(average > 0){
      return(
        <>
        <h1>Statistics</h1>
        <table>
        <Statistic text="good" stat={good} />
        <Statistic text="neutral" stat={neutral} />
        <Statistic text="bad" stat={bad} />
        <Statistic text="all" stat={all} />
        <Statistic text="average" stat={average} />
        <Statistic text="positive" stat={`${positive} %`} />
        </table>
      </>
      )}
      return(
        <>
        <h1>Statistics</h1>
        <p>No Feedback Given...</p>
        </>
      )
    }
     
  return (
    <div className="App">
     <Content good={good} neutral={neutral} bad={bad} />
     <Statistics />
    </div>
  );
}

export default App;
