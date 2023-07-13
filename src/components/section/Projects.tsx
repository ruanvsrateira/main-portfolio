import "./Projects.scss";

import { Card } from "../elements/Card";
import { ButtonFulled } from "../elements/ButtonFulled";

import hboMax from "../../assets/projects/hboMax.png";

export const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h1>Conheça os meus Melhores Projetos!</h1>

      <div>
        <Card
          title="HBO MAX"
          description="Projeto que é um clone do famoso serviço de streaming HBOMAX"
          img={hboMax}
          technologies={["HTML", "CSS", "Javascript"]}
          linkRepo="https://github.com/ruanvsrateira/Curso-DNC/tree/master/desafio-dnc-hbomax"
        />
      </div>
      <ButtonFulled
        color="purple"
        text="Ver repositório Completo"
        link="https://github.com/ruanvsrateira"
      />
    </section>
  );
};
