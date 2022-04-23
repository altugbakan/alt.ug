import Technologies from "../utils/Technologies";

const Skills = (props) => {
    return (
        <div className={props.className}>
            <h2 className="text-white text-2xl font-bold">Skills:</h2>
            <div className="flex flex-row items-center flex-wrap">
                {
                    Technologies.map((technology) => {
                        return (
                            <div key={technology.alt} className="flex flex-col group relative items-center mt-6 mr-4">
                                <span className="text-white text-center -top-6 w-max absolute invisible group-hover:visible">{technology.alt}</span>
                                <a href={technology.href} target="_blank" rel="noreferrer">
                                    <img src={technology.img} alt={technology.alt} className="object-contain h-8 w-8" />
                                </a>
                            </div>

                        );
                    })
                }
            </div>
        </div>
    );
}

export default Skills;