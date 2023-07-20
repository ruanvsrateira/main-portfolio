import "./Projects.scss";

import { Card } from "../elements/Card";
import { ButtonFulled } from "../elements/ButtonFulled";

import hboMax from "../../assets/projects/hboMax.png";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Project } from "../../interfaces/project";

export const Projects = () => {
  const [projects, setProjects] = useState<
    {
      name: Project["title"];
      description: Project["description"];
      topics: string[];
      html_url: string;
    }[]
  >();

  useEffect(() => {
    api.get("/repos").then(({ data }) => {
      console.log(data);
      setProjects(data);
    });
  }, []);

  return (
    <section className="projects-container" id="projects">
      <h1>Conheça os meus Melhores Projetos!</h1>

      <div>
        {projects?.map((project) => {
          if (project.topics.includes("portfolio")) {
            return (
              <Card
                title={`${project.name.replace("-", "")}`}
                description={project.description}
                technologies={project.topics}
                img={`https://raw.githubusercontent.com/ruanvsrateira/${project.name}/master/review.jpeg`}
                linkRepo={project.html_url}
              />
            );
          }
        })}
      </div>
      <ButtonFulled
        color="purple"
        text="Ver repositório Completo"
        link="https://github.com/ruanvsrateira"
      />
    </section>
  );
};
