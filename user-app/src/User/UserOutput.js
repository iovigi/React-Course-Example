const userOutput = (props) => {
    return <div>
        <p style={props.style}>{props.username}</p>
        <p style={props.style}>{props.profile}</p>
    </div>;
}

export default userOutput;