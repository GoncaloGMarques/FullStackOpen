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

	let hasFeedback = sum > 0;
	
	return (
		<>
			<Title text="give feedback" />
			<Button label="good" onClick={handleGoodClick} />
			<Button label="neutral" onClick={handleNeutralClick} />
			<Button label="bad" onClick={handleBadClick} />
			<Title text="statistics" />
			<Statistics goodValue={good} neutralValue={neutral} badValue={bad} allValue={sum} averageValue={average} positiveValue={good / sum * 100} hasFeedback={hasFeedback} />
		</>
	)
}

const Statistics = (props) => {
	if (props.hasFeedback) {
		return (
			<>
				<StatisticLine label="good" value={props.goodValue} />
				<StatisticLine label="neutral" value={props.neutralValue} />
				<StatisticLine label="bad" value={props.badValue} />
				<StatisticLine label="all" value={props.allValue} />
				<StatisticLine label="average" value={props.averageValue} />
				<StatisticLine label="positive" value={props.positiveValue} />
			</>
		)
	} else {
		return (
			<>
				<div>No feedback given</div>
			</>
		)
	}
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

const StatisticLine = (props) => {
	return (
		<div>{props.label} {props.value}</div>
	)
}

export default App