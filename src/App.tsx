import "./App.css";
import experiences from "./experiences";
import education from "./education";
import ExperienceList from "./ExperienceView";
import EducationList from "./EducationCard";
import ProgrammingLanguages from "./ProgrammingLanguages";
import data from "./data";
import CardList from "./CardList";

/*
<CardList
          components={[<SoftSkillsSection />, <LanguagesSection />]}
        />
*/
const App = () => {
  const until = 8;
  return (
    <>
      <div className="page">
        <Header />
        <ProfileSection />
        <ExperienceSection until={until} />
      </div>
      <div className="page">
        <ExperienceList experiences={experiences.slice(until)} />
        <div>
          <SoftSkillsSection />
          <LanguagesSection />
        </div>
        <EducationList educationHistory={education} />
      </div>
    </>
  );
};
//{/*<EducationSection />*/}
const Header = () => (
  <div style={{ textAlign: "center", marginBottom: 0 }}>
    <h1>Giulio Zani</h1>
    <div className="icon-container">
      {data.links.map((link, i) => (
        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
          <i
            className={`fa ${link.icon_name} fa-2x`}
            style={{ color: "black" }}
          >
          </i>
        </a>
      ))}
    </div>
  </div>
);

const ProfileSection = () => (
  <div className="profile-section">
    <img src="profile.jpeg" alt="Giulio Zani" className="profile-pic" />
    <div></div>
    <p className="profile-description" style={{ marginTop: "20px" }}>
      {data.description}
    </p>
    <div style={{ clear: "both" }}></div>
  </div>
);

const ExperienceSection = ({ until }: { until: number }) => (
  <div className="experience-section">
    <h2
      style={{ marginTop: "-2rem", marginBottom: "2rem", marginLeft: "-9rem" }}
    >
      Selected Experiences
    </h2>
    <ExperienceList experiences={experiences.slice(0, until)} />
  </div>
);

const SoftSkillsSection = () => {
  return (
    <div>
      <div className="title-bar">
        <h2>Soft Skills</h2>
      </div>
      <div className="pills-container">
        {data.softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-pill">{skill}</div>
        ))}
      </div>
    </div>
  );
};

const LanguagesSection = () => {
  return (
    <div>
      <div className="title-bar">
        <h2>Languages</h2>
      </div>
      <div className="pills-container">
        {data.spokenLanguages.map((language, i) => (
          <li key={i} className="lang-item">
            <span className="language-name">{language.name}</span>
            <span>
              {language.level}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default App;
