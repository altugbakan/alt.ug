const Logo = (props) => {
    return (
        <a href={props.href} target="_blank" rel="noreferrer" className="ml-4 mt-2">
            <svg className={`fill-zinc-400 hover:scale-125 ${props.imageStyle}`} viewBox={props.viewBox} height={props.size} width={props.size}>
                <path d={props.path} />
            </svg>
        </a>
    )
}

export default Logo;