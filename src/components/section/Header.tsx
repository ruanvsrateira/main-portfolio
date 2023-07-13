import "./Header.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Header = () => {
  return (
    <header className="header-container">
      <ul>
        <li>
          <a className="selected-tab" href="#apresentation">
            Apresentação
          </a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="mail:vruan85@gmail.com" target="__blank">
            <MdEmail size={24} />
          </a>
        </li>
        <li>
          <a href="https://github.com/ruanvsrateira" target="__blank">
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/ruan-victor-rateira"
            target="__blank"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
      </ul>
    </header>
  );
};
