import "./CardList.css";
import React from "react";

// const ExperienceList = ({ experiences }) => {
//   const experiencesTuples = experiences.reduce((acc, curr, index) => {
//     if (index % 2 === 0) {
//       acc.push([curr]);
//     } else {
//       acc[acc.length - 1].push(curr);
//     }
//     return acc;
//   }, [] as Experience[][]);
//
//   return (
//     <div className="experiences">
//       {experiencesTuples.map((experienceTuple, tupleIndex: number) => (
//         <div className="experience-row" key={tupleIndex}>
//           {experienceTuple.map((experience, index: number) => (
//             <ExperienceCard key={index} experience={experience} index={index} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };
//
//

const GridOrganizer = ({ components }: { components: JSX.Element[] }) => {
  const componentTuples = components.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, [] as JSX.Element[][]);

  return (
    <div className="grid">
      {componentTuples.map((componentTuple, rowIndex) => (
        <div className="row" key={rowIndex}>
          {componentTuple.map((component, colIndex) => (
            <React.Fragment key={colIndex}>
              {component}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};
export default GridOrganizer;
