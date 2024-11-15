import { FaTwitter, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__frame v-spacer">
        <p className="c-footer__copyright">
          &copy;Copyright 2024, All Rights Reserved.
        </p>
        <p className="c-footer__mail">
          <a className="c-footer__mail-link" href="mailto:xyz@shop.net">
            xyz@shop.net
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
