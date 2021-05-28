import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [previous, setPrevious] = useState(0)

  const Anecdote = () => {
    return(
      <p>
        {anecdotes[selected]}
      </p>
    )
  }

  const Button = ({text, handleClick}) => {
    return(
    <button onClick={handleClick}>{text}</button>
    )}

    const randomAnecdote = () => {
      let randomNumber = Math.floor(Math.random() * anecdotes.length)
      while(randomNumber === previous){
        randomNumber = Math.floor(Math.random() * anecdotes.length)
        setPrevious(randomNumber)
      }
      setPrevious(randomNumber)
      setSelected(randomNumber)
    }
    

  return (
    <div>
      <Anecdote />
      <Button text="next anecdote" handleClick={randomAnecdote } />
    </div>
  )
}

export default App