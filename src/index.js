import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>    
  )
}

const Part= (props)=> {
  console.log(props)
  return (
    <p>
      {props.part.name} {props.part.exercises}  
    </p>
  )
}


const Content = (props) => {
  return (
    <div>
        {props.parts.map(part => (<Part key={part.name} part={part} />))} 
      </div>    
  )
}


const Total = (props) => {
  let total=0;

  props.parts.forEach(element => {
    total+=element.exercises;
  });

  return (
    <p>
      Number of exercises {total} 
    </p>    
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
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


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))