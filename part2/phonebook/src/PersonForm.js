const PersonForm = function (props) {
    return (
        <form onSubmit={props.submitCallback}>
            {
                props.controls.map((control) => (
                    <div key={control.id}>
                        {control.label}: <input onChange={control.changeCallback} />
                    </div>
                ))
            }
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )
}


export default PersonForm;