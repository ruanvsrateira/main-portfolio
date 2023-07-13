import "./ButtonOutlined.scss";

interface IButtonOutlined {
  text: string;
  link: string;
}

export const ButtonOutlined = ({ text, link }: IButtonOutlined) => {
  return (
    <a href={link} target="__blank" className="button-outlined-container">
      <button className="button-outlined">{text}</button>
    </a>
  );
};
