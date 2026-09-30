import React from "react";
import "./cbutton.scss";

const CButton = ({ label, onClick, bName = "book-wrapper", type = "button", disabled = false }) => {
  return (
    <div className={bName}>
      <button
        className="btn-book"
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        <span>{label}</span>
      </button>
    </div>
  );
};

export default CButton;
