import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part partTitle={props.course.parts[0].name} partCounter={props.course.parts[0].exercises} />
            <Part partTitle={props.course.parts[1].name} partCounter={props.course.parts[1].exercises} />
            <Part partTitle={props.course.parts[2].name} partCounter={props.course.parts[2].exercises} />
        </div>
    );
};

export default Content;