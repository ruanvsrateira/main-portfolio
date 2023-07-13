import "./SkillTag.scss";

interface ISkillTag {
  img: string;
}

export const SkillTag = ({ img }: ISkillTag) => {
  return (
    <div className="skill-tag-container">
      <img src={img} alt="Icone de Tag de Skill" />
    </div>
  );
};
