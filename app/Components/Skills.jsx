// "use client"
// import React, { useRef, useState } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import SkillsTab from "./SkillsTab";
// import { skills } from "../Editable/Config";
// import Row from "react-bootstrap/Row";
// import { Jumbotron } from "./migration";
// import { Container } from "react-bootstrap";
// import { useScrollPosition } from "../Hooks/useScrollPosition";
// import '../Styles/_index.scss';

// const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
//   const skillsTabRef = useRef(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useScrollPosition(
//     ({ prevPos, currPos }) => {
//       if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
//     },
//     [],
//     skillsTabRef
//   );

//   return (
//     <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
//       <Container className="p-5 ">
//         <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
//           {heading}
//         </h2>
//         <Tabs
//           className="skills-tabs"
//           defaultActiveKey="hard-skills"
//           id="skills-tabs"
//           fill
//         >
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="hard-skills"
//             title="Technical Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="soft-skills"
//             title="Soft Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={softSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//         </Tabs>
//       </Container>
//     </Jumbotron>
//   );
// });

// export default Skills;

"use client"

import { useEffect, useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import SkillsTab from './SkillsTab'; // Assuming this is your existing SkillsTab component
import { skills } from "../Editable/Config";

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const [skillData, setSkillData] = useState({});

  useEffect(() => {
    // Simulate API call or any asynchronous operation to fetch skills data
    setTimeout(() => {
      setSkillData(skills);
      setLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);

  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {loading ? (
        <p>Loading skills...</p>
      ) : (
        <SkillsTab hardSkills={skillData.hardSkills} softSkills={skillData.softSkills} />
      )}
    </>
  );
};

export default Skills;
