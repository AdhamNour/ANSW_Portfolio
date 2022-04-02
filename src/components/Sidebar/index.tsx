import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

import "./index.scss";
interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = () => {
  return (
    <div className="nav-bar">
      <Link to={"/"} className="logo">
        <h1>ANSW</h1>
        <h6>AdhamNourSoftWare</h6>
      </Link>
      <nav>
        <NavLink
          to={"/"}
          end
          className={(props) => {
            return `${props.isActive ? "active " : ""}`;
          }}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to={"/about"}
          end
          className={(props) => {
            return `${props.isActive ? "active " : ""} about-link`;
          }}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to={"/contact"}
          end
          className={(props) => {
            return `${props.isActive ? "active " : ""} contact-link`;
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
          <li>
              <a href="https://www.linkedin.com/in/adham-nour-el-waffaa-mohammed/" target='_blank' rel='noreferrer' >
                  <FaLinkedin color="#4d4d4e" />
              </a>
          </li>
          <li>
              <a href="https://github.com/AdhamNour" target='_blank' rel='noreferrer' >
                  <FaGithub color="#4d4d4e" />
              </a>
          </li>
      </ul>
    </div>
  );
};

export default SideBar;
