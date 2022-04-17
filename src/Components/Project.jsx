const Project = (props) => {
    return (
        <>
            <a href={props.href} target="_blank" rel="noreferrer" className="font-bold underline">{props.title}</a>
            : <span className="text-zinc-400">{props.text}</span>
        </>
    );
}

export default Project;