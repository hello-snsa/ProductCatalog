import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Made with Love ❤️ by Ali. All Rights Reserved.
        </p>
        <ul className="footer-links">
          <li className="footer-link-item">
            <Link to="/coming-soon" className="footer-link">
              Privacy Policy
            </Link>
          </li>
          <li className="footer-link-item">
            <Link to="/coming-soon" className="footer-link">
              Terms of Service
            </Link>
          </li>
          <li className="footer-link-item">
            <Link to="/coming-soon" className="footer-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
