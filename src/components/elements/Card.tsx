import "./Card.scss";
import { ButtonFulled } from "./ButtonFulled";
import { Project } from "../../interfaces/project";

export const Card = ({
  title,
  description,
  img,
  technologies,
  linkRepo,
}: Project) => {
  return (
    <div className="card-container">
      <div className="project-image">
        <img src={img} alt={img} />
      </div>
      <div className="project-data ">
        <h3>{title}</h3>
        <p>
          <strong>Tecnologias: </strong> {technologies.map((tec) => `${tec},`)}
          {description}
        </p>
        <ButtonFulled
          text="Acessar Repositório"
          color="green"
          link={linkRepo}
        />
      </div>
    </div>
  );
};
