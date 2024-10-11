import { FaTwitter, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons"

const Footer = () => {
  return (
    <>
      <nav className="nav justify-content-center">
        <a className="nav-link active" aria-current="page" href="#">
          <FaTwitter style={{ color: "#f4aa3a" }} />
        </a>
        <a className="nav-link" href="#">
          <FaFacebook style={{ color: "#f4aa3a" }}/>
        </a>
        <a className="nav-link" href="#">
          <FaGithub style={{ color: "#f4aa3a" }} />
        </a>
        <a className="nav-link">
          <FaLinkedinIn style={{ color: "#f4aa3a" }} />
        </a>
      </nav>
      <p className="text-center">&copy;copyright 2024</p>
    </>
  );
};

export default Footer;
