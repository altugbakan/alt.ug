import SkillData from "../utils/SkillData";

const Skills = (props) => {
    return (
        <div className={props.className}>
            <h2 className="text-white text-2xl font-bold">Skills</h2>
            <div className="flex flex-row items-center flex-wrap">
                {
                    SkillData.map((skill) => {
                        return (
                            <div key={skill.alt} className="flex flex-col group relative items-center mt-6 mr-4">
                                <span className="text-white text-center -top-6 w-max absolute invisible group-hover:visible">{skill.alt}</span>
                                <a href={skill.href} target="_blank" rel="noreferrer">
                                    <img src={skill.img} alt={skill.alt} className="object-contain h-8 w-8" />
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