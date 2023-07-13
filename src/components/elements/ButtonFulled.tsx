import { FaGithub } from "react-icons/fa";
import "./ButtonFulled.scss";

interface IButtonFulled {
  text: string;
  color: "green" | "purple";
  link?: string;
}

export const ButtonFulled = ({ text, color, link }: IButtonFulled) => {
  if (color == "green") {
    return (
      <a href={link} target="__blank">
        <button className="button-fulled-green">{text}</button>
      </a>
    );
  }

  if (color == "purple") {
    return (
      <a href={link} target="__blank">
        <button className="button-fulled-purple">
          {text} <FaGithub size={30} />
        </button>
      </a>
    );
  }
};
