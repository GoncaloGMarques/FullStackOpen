import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
  }

  let sum = good + neutral + bad;
  let average = (good + (-bad)) / sum;
  return (
    <>
      <Title text="give feedback" />
      <Button label="good" onClick={handleGoodClick} />
      <Button label="neutral" onClick={handleNeutralClick} />
      <Button label="bad" onClick={handleBadClick} />
      <Title text="statistics" />
      <FeedbackValue label="good" value={good} />
      <FeedbackValue label="neutral" value={neutral} />
      <FeedbackValue label="bad" value={bad} />
      <FeedbackValue label="all" value={good + neutral + bad} />
      <FeedbackValue label="average" value={average} />
      <FeedbackValue label="positive" value={good / sum * 100} />
    </>
  )
}

const Title = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.label}</button>
  )
}

const FeedbackValue = (props) => {
  return (
    <div>{props.label} {props.value}</div>
  )
}

export default App