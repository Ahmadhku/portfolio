import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#Hero">About</a>
        </li>
        <li>
          <a href="#Main">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <p>© 2024 Ahemt Awad. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
