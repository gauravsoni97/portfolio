import React from "react";
import SkillsData from "../../data/Skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skill">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="h3 skills-title"
      >
        Skills
      </motion.h3>
      <ul className="skills-list content-card">
        {SkillsData.map((skill) => (
          <li className="skills-item" key={skill.id}>
            <figure className="skills_avatar">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                src={skill.SkillImage}
                alt={skill.SkillName}
                width={50}
                style={skill.imgStyle}
                data-testimonials-avatar
              />
            </figure>
            <motion.div
              className="skills-content-box"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h4 className="h4 skills-item-title">{skill.SkillName}</h4>
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
