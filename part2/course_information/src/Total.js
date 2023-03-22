const Total = (props) => {
    let totalExercises = props.parts.reduce((partialSum, item) => partialSum += item.exercises, 0);
    return (
        <p>Total of {totalExercises} exercises</p>
    )
};

export default Total;