import React from "react";
import { Education } from "./education";
import CardList from "./CardList";
import "./ExperienceView.css";

interface Props {
  educationHistory: Education[];
}

const EducationCard = (
  { education, index }: { education: Education; index: number },
) => {
  return (
    <div
      className="card"
      style={{
        marginRight: (index % 2) === 0 ? "5px" : "0",
        marginLeft: (index % 2) !== 0 ? "5px" : "0",
      }}
    >
      <h3 className="experience-title">{education.title}</h3>
      <p className="experience-dates">
        {education.from} - {education.to}
      </p>
      <p className="experience-location">{education.institution}</p>
      <p className="experience-description">{education.notes}</p>
    </div>
  );
};

const EducationList: React.FC<Props> = ({ educationHistory }) => {
  const educationCards = educationHistory.map((edu, index) => (
    <EducationCard key={index} education={edu} index={index} />
  ));

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2 >
          Education
        </h2>
      </div>
      <CardList components={educationCards} />
    </>
  );
};

export default EducationList;
