import { Experience } from "./experiences";
import CardList from "./CardList";
import "./ExperienceView.css";

interface Props {
  experiences: Experience[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = (
  { experience, index },
) => {
  return (
    <div
      className="card"
      style={{
        marginRight: (index % 2) === 0 ? "15px" : "0",
        marginLeft: (index % 2) !== 0 ? "15px" : "0",
      }}
    >
      <h3 className="experience-title">{experience.title}</h3>
      <p className="experience-dates">
        {experience.from} - {experience.to}
      </p>
      <p className="experience-location">{experience.location}</p>
      {experience.supervisor && (
        <p className="experience-supervisor">{experience.supervisor}</p>
      )}
      <p className="experience-type">{experience.type}</p>
      <p className="experience-description">{experience.description}</p>
      {experience.skills && (
        <div className="technologies">
          {experience.skills.map((skill, index) => (
            <span className="technology" key={index}>
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const ExperienceList: React.FC<Props> = ({ experiences }) => {
  const experienceCards = experiences.map((exp, index) => (
    <ExperienceCard key={index} experience={exp} index={index} />
  ));

  return <CardList components={experienceCards} />;
};

export default ExperienceList;
