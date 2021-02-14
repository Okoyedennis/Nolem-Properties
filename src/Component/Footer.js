import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info ">
        <div className="footer__infoLeft">
          <p>
            Here at Nolem Properties we felt the need to develop an enviroment
            where people can live and also invest to experience the core art of
            real estate professionalism
          </p>
        </div>
        <div className="footer__infoMiddle">
          <div className="pagesFlex1">
            <h4>Email:</h4> <span className="spa">okoyedennis7@gmail.com</span>
          </div>

          <div className="pagesFlex1">
            <h4>Phone: </h4>
            <span> +2348128885947,</span>
          </div>

          <div className="pagesFlex1">
            <h4>Open:</h4>
            <span className="spa">
              Mon - Fri: 8:00am - 5:00pm <br /> Sat: 8:00am - 2:00pm
            </span>
          </div>
        </div>
        <div className="footer__infoRight">
          <a
            className="link"
            href="https://www.facebook.com/search/top?q=nolem%20properties"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="footer__icon" />
          </a>
          <a
            className="link"
            href="https://www.twitter.com/NolemProperties"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="footer__icon" />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/nolem_properties/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="footer__icon" />
          </a>
        </div>
      </div>

      <h2>Copyright &copy;2021</h2>
    </footer>
  );
};

export default Footer;
