
import './App.css';

function App() {

  const course = 'Half stack web development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({course}) => {
    return (<h1>{course}</h1>
    )}

  const Part = ({part, exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }

    const Content = () => {
      return(
        <>
        <Part part={part1} exercises={exercises1} />
        <Part part={part2} exercises={exercises2} />
        <Part part={part3} exercises={exercises3} />
        </>
      )}

    

const Total = ({total}) => {
  return(
<p>Number of exercises {total}</p>
  )}
  return (
    <div className="App">
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
