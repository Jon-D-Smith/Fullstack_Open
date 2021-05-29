
  
  const Header = ({course}) => {
    return (<h1>{course.name}</h1>
    )}

  const Part = ({part, exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }

    const Content = ({course}) => {
      return(
        <>
        {course.parts.map(part => 
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
        </>
      )}

    

const Total = ({course}) => {
  const total = course.parts.reduce((s,p) =>{
    const total = s + p.exercises
    return total
  }, 0)
  return(
    
<p>Number of exercises {total}</p>
  )}

  const Course = ({course}) => {
    return (
      <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      </>
    )
    
  }

  export default Course