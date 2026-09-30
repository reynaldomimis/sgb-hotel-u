import React from "react";

const TextArea = ({ name, value, onChange }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows="4"
      cols="50"
      aria-label="Message"
    />
  );
};

export default TextArea;
