import { Education } from "./education";
import "./ExperienceView.css";

const EducationList: React.FC<{ education: Education[] }> = (
  { education },
) => {
  const educationTuples = education.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, [] as Education[][]);
  return (
    <table>
      <tbody>
        {educationTuples.map((educationTuple, index) => (
          <tr key={index}>
            {educationTuple.map((education, index) => (
              <td
                key={index}
                style={{
                  top: 0,
                  marginTop: 0,
                  width: "50%",
                  textAlign: "start",
                  paddingRight: (index % 2) == 0 ? 10 : 0,
                }}
              >
                <h3 className="experience-title">{education.title}</h3>
                <p className="experience-dates">
                  {education.from} - {education.to}
                </p>
                <p className="experience-location">
                  <strong>Institution:</strong> {education.institution}
                </p>
                <p className="experience-location">
                  <strong>Location:</strong> {education.location}
                </p>
                {education.gpa && (
                  <p className="experience-type">
                    <strong>GPA:</strong> {education.gpa}
                  </p>
                )}
                {education.notes && (
                  <p className="experience-description">{education.notes}</p>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EducationList;
