const Filter = function (props) {
    return (
        <div>
            filter shown with
            <input onChange={props.onChangeCallback} />
        </div>
    )
}

export default Filter;