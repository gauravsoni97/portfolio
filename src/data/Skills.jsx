import html from "../assets/images/skills/Html.png";
import css from "../assets/images/skills/Css.png";
import js from "../assets/images/skills/Javascript.png";
import bootstrap from "../assets/images/skills/Bootstrap.png";
import sass from "../assets/images/skills/Sass.png";
import tailwindcss from "../assets/images/skills/tailwindcss.svg";
import figma from "../assets/images/skills/Figma.png";
import wordpress from "../assets/images/skills/Wordpress.png";
import react from "../assets/images/skills/React.png";
import nextjs from "../assets/images/skills/nextjs.svg";
import materialui from "../assets/images/skills/materialui.svg";
import reactrouter from "../assets/images/skills/reactrouter.svg";
import git from "../assets/images/skills/git.svg";
import github from "../assets/images/skills/github.svg";
import vscode from "../assets/images/skills/vscode.svg";

const SkillsData = [
  {
    id: 1,
    SkillName: "HTML",
    SkillImage: html,
  },
  {
    id: 2,
    SkillName: "CSS",
    SkillImage: css,
  },
  {
    id: 3,
    SkillName: "JavaScript",
    SkillImage: js,
    imgStyle: { borderRadius: ".5rem" },
  },
  {
    id: 4,
    SkillName: "Bootstrap",
    SkillImage: bootstrap,
  },
  {
    id: 5,
    SkillName: "ReactJs",
    SkillImage: react,
  },
  {
    id: 6,
    SkillName: "Figma",
    SkillImage: figma,
  },
  {
    id: 7,
    SkillName: "Tailwind CSS",
    SkillImage: tailwindcss,
    imgStyle: {
      height: "3.1rem",
    },
  },
  {
    id: 8,
    SkillName: "SASS",
    SkillImage: sass,
  },
  {
    id: 9,
    SkillName: "WordPress",
    SkillImage: wordpress,
  },
  {
    id: 10,
    SkillName: "NextJs",
    SkillImage: nextjs,
    imgStyle: {
      filter: "invert(1)",
      height: "3.1rem",
    },
  },
  {
    id: 12,
    SkillName: "React Router",
    SkillImage: reactrouter,
    imgStyle: {
      height: "3.1rem",
    },
  },
  {
    id: 11,
    SkillName: "Material UI",
    SkillImage: materialui,
    imgStyle: {
      height: "3.1rem",
    },
  },

  {
    id: 13,
    SkillName: "Github",
    SkillImage: github,
    imgStyle: {
      height: "3.1rem",
      filter: "invert(1)",
    },
  },
  {
    id: 14,
    SkillName: "VS Code",
    SkillImage: vscode,
    imgStyle: {
      height: "3.1rem",
    },
  },

  {
    id: 15,
    SkillName: "Git",
    SkillImage: git,
    imgStyle: {
      height: "3.1rem",
    },
  },
];

export default SkillsData;
