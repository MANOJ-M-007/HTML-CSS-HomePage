import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-column">
          <h1 className="logo">
            React<i className="fab fa-react"> </i>
          </h1>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Return</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Offers</h4>
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Time</a>
            </li>
            <li>
              <a href="#">Shoppings</a>
            </li>
            <li>
              <a href="#">Monthly</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
