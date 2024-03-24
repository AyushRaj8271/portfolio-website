import './skill.css';
export default function SkillElement({ skill, value }){
    return (
      <div className="skill">
        <div className="subject">{skill}</div>
        <div className="progress-bar" value={`${value}%`}>
          <div className="progress-line" style={{ maxWidth: `${value}%` }}></div>
        </div>
      </div>
    );
  };