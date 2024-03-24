import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { skillList, ProfessionalSkills } from "../constants";
import SkillSection from "./SkillSection";
import './skill.css';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const MySkills = () => {
    const [reloadSkills, setReloadSkills] = useState(false);

    const reloadMySkills = () => {
        setReloadSkills(true);
        setTimeout(() => {
            setReloadSkills(false);
        }, 10000); // Adjust the timeout as per your requirement
    };

    return (
        <div className="container">
            {/* Main Heading Starts */}
            <motion.div variants={textVariant()} className="text-center"> {/* Apply the motion component to a div */}
                <p className={`${styles.sectionSubText}`}>
                Explore the technical and professional expertise I can offer.
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    My Skills
                </h2>
            </motion.div>
            {/* Main Heading Ends */}

            <motion.div variants={textVariant()} className="row">
                {/* Left Section Starts here */}
                <SkillSection array={skillList} reloadSkills={reloadSkills} />
                {/* Left Section Ends Here */}

                {/* Right Section Starts Here */}
                <section className="col">
                    <SkillSection array={ProfessionalSkills} reloadSkills={reloadSkills} />
                </section>
                {/* Right Section Ends Here */}
            </motion.div>
        </div>
    );
}

export default SectionWrapper(MySkills, "myskills");
