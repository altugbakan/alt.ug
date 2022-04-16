const Logo = (props) => {
    return (
        <a href={props.href} target="_blank" rel="noreferrer" className="m-2 scale-75 ring-zinc-600
                hover:ring-4 hover:bg-zinc-600 hover:scale-100 rounded-full">
            <img src={props.img} alt={props.alt} width={props.size} height={props.size} />
        </a>
    )
}

export default Logo;