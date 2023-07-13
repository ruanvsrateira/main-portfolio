import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div>
        <div>
          <ul>
            <li>
              <a href="mail:vruan85@gmail.com" target="__blank">
                <MdEmail size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/ruanvsrateira" target="__blank">
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ruan-victor-rateira"
                target="__blank"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
        <p>vruan85@gmail.com</p>
        <div>Ruan Victor ₢ 2023</div>
      </div>
    </footer>
  );
};
