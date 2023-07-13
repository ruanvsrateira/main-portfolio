import "./ButtonOutlined.scss";

interface IButtonOutlined {
  text: string;
  link: string;
}

export const ButtonOutlined = ({ text, link }: IButtonOutlined) => {
  return (
    <a href={link} target="__blank">
      <button className="button-outlined">{text}</button>
    </a>
  );
};
