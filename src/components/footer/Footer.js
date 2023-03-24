import gitHub from "./../../img/icons/gitHub.svg";
import instagram from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <ul className="social_icons">
            <li className="icons">
              <a
                href="https://github.com/Liubov12"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="GitHub" />
              </a>
            </li>
            <li className="icons">
              <a
                href="https://www.linkedin.com/in/luba-koval-5030a1234/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </li>
            <li className="icons">
              <a
                href="https://www.instagram.com/kov__l__/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
