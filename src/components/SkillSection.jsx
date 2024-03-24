import { skillList, ProfessionalSkills } from "../constants";
import SkillElement from "./SkillElement";
import './skill.css';
export default function SkillSection({ array, reloadSkills }) {
    return (
       <section className={`col ${reloadSkills ? 'reload-animation' : ''}`}>
            <div className="sub-title">
            <h3 className='text-white text-[24px] font-bold mb-7'>{array===skillList ? `ProgrammingSkills` : `ProfessionalSkills` }</h3>
                {/* <h2></h2> */}
            </div>
            <div className="skills-container">

                {array.map(({ skill, value }) => (
                    <SkillElement skill={skill} value={value} />
                ))}

            </div>
        </section>
    );
}
