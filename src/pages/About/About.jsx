import React, { useEffect } from "react";
import "../../index.css";

import Skills from "./Skills";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article
      className="about  active"
      data-page="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <motion.header initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
        <h2 className="h2 article-title">About me</h2>
      </motion.header>
      <motion.section className="about-text" initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
        <p>
          Hello! My name is Gaurav Soni and I am a frontend web developer from
          Rajasthan, India. I have more than 3+ years of experience working with
          HTML, CSS, JavaScript, Bootstrap, ReactJs and other fronend
          development technologies. Currently, I am expanding my skills by
          learning NextJs.
        </p>
        <p>
          I am passionate about web development and enjoy collaborating with
          others as part of a team. I believe that teamwork is essential to
          producing great results and I am always eager to learn from my
          colleagues.
        </p>
        <p>
          When I am not coding, I enjoy exploring new technologies and staying
          up-to-date with the latest trends in web development. I am always
          looking for new challenges and opportunities to grow as a developer.
        </p>
      </motion.section>

      <Skills />
    </article>
  );
};

export default About;
