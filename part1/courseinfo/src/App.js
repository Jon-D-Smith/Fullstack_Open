
import './App.css';

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  const Header = ({course}) => {
    return (<h1>{course.name}</h1>
    )}

  const Part = ({part, exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }

    const Content = () => {
      return(
        <>
        <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
        <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
        <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
        </>
      )}

    

const Total = ({parts}) => {
  return(
<p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
  )}
  return (
    <div className="App">
      <Header course={course} />
      <Content parts={course}/>
      <Total parts={course} />
    </div>
  );
}

export default App;
