import React from "react";
import { Link } from "react-router-dom";
import "./ccardbooking.scss";

const CCardBooking = ({ bC2, bP2, bT2, bT1, bP1, bC1 }) => {
  return (
    <>
      <div className="cb-wrapper">
        <div className={bC1}>
          <div className="c-content">
            <h4 className="c-title">{bT1}</h4>
            <p className="c-price">
              price from <b>₱ {bP1}</b> per night
            </p>
            <Link className="cb-btn" to="/reservation">
              <span className="cb-label">View availability</span>
            </Link>
          </div>
        </div>
        <div className={bC2}>
          <div className="c-content">
            <h4 className="c-title">{bT2}</h4>
            <p className="c-price">
              price from <b>₱ {bP2}</b> per night
            </p>
            <Link className="cb-btn" to="/reservation">
              <span className="cb-label">View availability</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CCardBooking;
