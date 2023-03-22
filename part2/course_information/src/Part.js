const Part = (props) => {
    console.log('testes');
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    );
}

export default Part;