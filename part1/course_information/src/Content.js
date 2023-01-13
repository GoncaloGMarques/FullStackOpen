import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part partTitle={props.part1} partCounter={props.exercises1} />
            <Part partTitle={props.part2} partCounter={props.exercises2} />
            <Part partTitle={props.part3} partCounter={props.exercises3} />
        </div>
    );
};

export default Content;