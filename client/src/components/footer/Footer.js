import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./Footer.scss";
import creditCardImg from "../../assets/creditcardicons.png";
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow Us</h3>
            <ul className="follow">
              <li className="hover-link">
                <AiOutlineInstagram></AiOutlineInstagram>
              </li>
              <li className="hover-link">
                <AiOutlineFacebook></AiOutlineFacebook>
              </li>
              <li className="hover-link">
                <AiOutlineTwitter></AiOutlineTwitter>
              </li>
              <li className="hover-link">
                <AiOutlineMail></AiOutlineMail>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="title">Company</h3>
            <ul className="company">
              <li className="hover-link">Contact Us</li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Returns and Exchange Policy</li>
              <li className="hover-link">Shipping Policy</li>
              <li className="hover-link">Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="subfooter">
          <div className="credit-card-img">
            <img src={creditCardImg} alt="credit card img" />
          </div>
          <p>
            copyright {new Date().getFullYear()} © <strong>Posterz.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
