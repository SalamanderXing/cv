import { Experience } from "./experiences";
import "./ExperienceView.css";

interface Props {
    experiences: Experience[];
}

const ExperienceList: React.FC<Props> = ({ experiences }) => {
    // splits experiences into tuples of 2
    const experiencesTuples = experiences.reduce((acc, curr, index) => {
        if (index % 2 === 0) {
            acc.push([curr]);
        } else {
            acc[acc.length - 1].push(curr);
        }
        return acc;
    }, [] as Experience[][])
    return (
        <table style={{ lineHeight: 1.0 }}>
            <tbody>
                {experiencesTuples.map((experienceTuple, index) => (
                    <tr key={index}>
                        {experienceTuple.map((experience, index) => (
                            <td key={index} style={{
                                top: 0, marginTop: 0, width: '50%', textAlign: 'start',
                                    paddingRight: (index % 2) == 0 ? 15 : 0,
                                    paddingLeft: (index % 2) != 0 ? 15 : 0 }}>
                                <h3 className="experience-title" style={{ top: 0 }}>{experience.title}</h3>
                                <p className="experience-dates">
                                    {experience.from} - {experience.to}
                                </p>
                                <p className="experience-location">
                                    <strong>Location:</strong> {experience.location}
                                </p>
                                {experience.supervisor && <p className="experience-supervisor">
                                    <strong>Supervisor:</strong> {experience.supervisor}
                                </p>}
                                <p className="experience-type">
                                    <strong>Type:</strong> {experience.type}
                                </p>
                                <p className="experience-description" style={{ textAlign: 'justify' }}>{experience.description}</p>
                                {experience.technologies && (
                                    <div className="technologies">
                                        <span style={{ marginRight: 10 }}>Technologies:</span>
                                        {experience.technologies.map((technology, index) => (
                                            <span className="technology" key={index}>
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExperienceList


/*
<ul className="experience-list">
                                    <li key={index} className="experience-item">
                                        <h3 className="experience-title">{experience.title}</h3>
                                        <p className="experience-dates">
                                            {experience.from} - {experience.to}
                                        </p>
                                        <p className="experience-location">
                                            <strong>Location:</strong> {experience.location}
                                        </p>
                                        {experience.supervisor && <p className="experience-supervisor">
                                            <strong>Supervisor:</strong> {experience.supervisor}
                                        </p>}
                                        <p className="experience-type">
                                            <strong>Type:</strong> {experience.type}
                                        </p>
                                        <p className="experience-description">{experience.description}</p>
                                        {experience.technologies && (
                                            <div className="technologies">
                                                <span style={{ marginRight: 10 }}>Technologies:</span>
                                                {experience.technologies.map((technology, index) => (
                                                    <span className="technology" key={index}>
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </li>
      ))}
                                </ul>
                                */
