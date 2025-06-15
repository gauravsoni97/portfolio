import React, { useEffect } from "react";
import "../../index.css";
import ProjectList from "../../data/Projects";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

import { motion } from "framer-motion";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className="portfolio" data-page="portfolio">
      <motion.header initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="h2 article-title">Projects</h2>
      </motion.header>
      <section className="projects">
        {/*------------ all projects here to show --------------*/}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="all-projects"
        >
          {ProjectList?.sort((a, b) => b.id - a.id).map((ele) => {
            const { id, image, tag, title, description, liveLink, githubLink } =
              ele;
            return (
              <div className="project_box  service-item " key={id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="project_img1 project_img"
                  style={{ backgroundImage: `URL(${image})` }}
                ></motion.div>
                <div className="project-desc">
                  <h2>{title}</h2>
                  <p className="timeline-text">{description}</p>
                  <br />
                  <div className="project-link-btns">
                    <a target="_blank" href={liveLink}>
                      <button className="form-btn">
                        <OpenInNewRoundedIcon style={{ width: "1.1rem" }} />{" "}
                        Live Preview
                      </button>
                    </a>
                    <a target="_blank" href={githubLink}>
                      <button className="form-btn">
                        <CodeRoundedIcon style={{ width: "1.1rem" }} /> Source
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>
    </article>
  );
};

export default Portfolio;
