import React from "react";
import "./cbutton.scss";

const CButton = ({ label, onClick, bName }) => {
  return (
    <>
      <div className={bName}>
        <div className="btn-book" onClick={onClick}>
          <span>{label}</span>
        </div>
      </div>
    </>
  );
};

export default CButton;
