import React from "react";
import "./smallheader.scss";

const SmallHeader = ({ title, cTitle }) => {
  return (
    <>
      <div className={cTitle}>
        <span className="sh-soto">{title}</span>
      </div>
    </>
  );
};

export default SmallHeader;
