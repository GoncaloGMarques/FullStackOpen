const Persons = function (props) {
    return (
        props.listOfNumbers.map((person) =>
            <div key={person.id}>{person.name} - {person.number} </div>
        )
    )
}

export default Persons;