import "./Skills.scss";
import { SkillTag } from "../elements/SkillTag";

import nest from "../../assets/skills/nest.svg";
import netlify from "../../assets/skills/netlify.svg";
import vite from "../../assets/skills/vite.svg";
import js from "../../assets/skills/js.svg";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import react from "../../assets/skills/react.svg";
import typescript from "../../assets/skills/typescript.svg";
import vercel from "../../assets/skills/vercel.svg";

export const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h1>Habilidades ⚡</h1>

      <p>Estas são as ferramentas mais utilizadas em meus projetos</p>

      <div className="skills">
        <SkillTag img={nest} />
        <SkillTag img={html} />
        <SkillTag img={css} />
        <SkillTag img={js} />
        <SkillTag img={react} />
        <SkillTag img={typescript} />
        <SkillTag img={vite} />
        <SkillTag img={netlify} />
        <SkillTag img={vercel} />
      </div>
    </section>
  );
};
