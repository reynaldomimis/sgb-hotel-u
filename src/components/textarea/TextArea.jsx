import React from "react";

const TextArea = ({ name, value, onChange }) => {
  return (
    <>
      <textarea
        name={name}
        value={value}
        style={{ outline: "none" }}
        onChange={onChange}
        rows="4"
        cols="50"
      ></textarea>
    </>
  );
};

export default TextArea;
