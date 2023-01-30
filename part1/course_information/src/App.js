import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

import { useState } from 'react'

const App = () => {
 
  const [ counter, setCounter ] = useState(0)
  const increaseBy = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
 
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: counter
    }, {
      name: 'Using props to pass data',
      exercises: 7
    }, {
      name: 'State of a component',
      exercises: 14
    }]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course} />
      <div>{counter}</div>
      <button onClick={increaseBy}>
        plus
      </button>
      <button onClick={setToZero}>
        reset
      </button>
    </div>
  )
}

export default App