import React from "react";
import "./error.scss";

const Error = () => {
  return (
    <>
      <div className="error-toast">
        <div className="cancel">
          <p>
            <b>Cancellation: </b>If cancelled, modified or in case of no-show,
            no penalty will be charged.
          </p>
        </div>
        <div className="in">
          <p>
            <b>Check-in: </b>14:00
          </p>
        </div>
        <div className="out">
          <p>
            <b>Check-out: </b>12:00
          </p>
        </div>
        <div className="other">
          <p>
            <b>Other Policies:</b> Guests aged 12 and above are considered
            adults and require additional rate.
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
