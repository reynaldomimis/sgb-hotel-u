import React from "react";
import "./cfooter.scss";
import { Link } from "react-router-dom";
import soto from "../../images/baguio.jpg";

const CFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <Link to="/" className="site-footer__brand" aria-label="Soto Grande Baguio home">
          <img alt="Soto Grande Baguio Hotel" src={soto} className="site-footer__logo" />
        </Link>
        <section className="site-footer__contact" aria-label="Contact information">
          <h2>Contact</h2>
          <address>
            <span>Leonard Wood Rd, Baguio City, Philippines, 2600</span>
            <span>0916 311 9388</span>
            <span>staluciamarketingph@gmail.com</span>
          </address>
        </section>
      </div>
      <small className="site-footer__note">
        Soto Grande Baguio Hotel — frontend portfolio demonstration. Contact details are presented as sample content.
      </small>
    </footer>
  );
};

export default CFooter;
