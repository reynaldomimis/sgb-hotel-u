import React, { useState } from "react";
import soto from "../../images/baguio.jpg";
import "./details.scss";
import InfoIcon from "@mui/icons-material/Info";
import PhoneInput from "react-phone-number-input";
import Nationality from "../../components/option/Option";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";

const BookingDetails = () => {
  const [phone, setPhone] = useState();
  const [formStatus, setFormStatus] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [bdatas, setBdatas] = useState({
    message: "",
    title: "",
    firstname: "",
    lastname: "",
    country: "",
    uGmail: "",
    rGmail: "",
    cIn: "Sample check-in from 14:00",
    cOut: "Sample check-out until 10:00",
    cDate: "the selected check-in date",
    dDate: "the sample arrival date",
    bRooms: "Deluxe Double",
    tPrice: 5000,
    nUnit: 2,
    nGuest: 2,
  });

  const {
    message,
    title,
    firstname,
    lastname,
    country,
    uGmail,
    rGmail,
    cIn,
    cOut,
    cDate,
    dDate,
    bRooms,
    tPrice,
    nUnit,
    nGuest,
  } = bdatas;
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setBdatas({ ...bdatas, [name]: value });
    setFormStatus(null);
  };

  const submitMockBooking = () => {
    if (title === "") {
      setFormStatus({ type: "error", message: "Please select a title." });
    } else if (firstname === "") {
      setFormStatus({ type: "error", message: "Please enter a first name." });
    } else if (lastname === "") {
      setFormStatus({ type: "error", message: "Please enter a last name." });
    } else if (uGmail === "") {
      setFormStatus({ type: "error", message: "Please enter an email address." });
    } else if (rGmail === "") {
      setFormStatus({ type: "error", message: "Please re-enter your email address." });
    } else if (uGmail !== rGmail) {
      setFormStatus({ type: "error", message: "The email addresses do not match." });
    } else if (phone == null) {
      setFormStatus({ type: "error", message: "Please enter a mobile number." });
    } else if (country === "") {
      setFormStatus({ type: "error", message: "Please select a nationality." });
    } else if (!acceptedTerms) {
      setFormStatus({ type: "error", message: "Please acknowledge the demo booking terms." });
    } else {
      setFormStatus({
        type: "success",
        message: "Demo booking preview confirmed in this browser only. No reservation, payment, or personal data was submitted.",
      });
    }
  };

  return (
    <div className="details">
      <div className="wrapper">
        <div className="logo">
          <img src={soto} className="soto" alt="Soto Grande Baguio Hotel" />
        </div>
        <div className="d-checkin">
          <span className="title">Soto Grande Baguio Hotel {}</span>
          <div className="check-wrapper">
            <span className="checkin">
              <b>Check-in: </b> {cIn}
            </span>
            <span className="checkout">
              <b>Check-out:</b> {cOut}
            </span>
            <span className="travel">
              <Link to="/reservation" className="link">
                (Travelling on different dates?)
              </Link>
            </span>
          </div>
        </div>
        <div className="a-booking">
          <span className="title">Accommodation Booking</span>
          <div className="wrapper1">
            <div className="col1">
              <span className="room">{bRooms}</span>
              <span className="cancel">Free cancellation before {cDate}</span>
              <span className="adults">
                Details: {nUnit} room, {nUnit} nights, {nGuest} included in
                price
              </span>
            </div>
            <div className="col2">
              Number of units
              <select name="nUnit" value={nUnit} onChange={onHandleChange}>
                <option value="1">1 room</option>
                <option value="2">2 rooms</option>
              </select>
            </div>
            <div className="col3">
              <div className="n-guest">
                <div className="n-wrapper">
                  <span>Number of guests unit 1</span>
                  <InfoIcon className="icon" />
                </div>
                <select name="nGuest" value={nGuest} onChange={onHandleChange}>
                  <option value="1 adults, 1 child">1 adults, 1 child</option>
                  <option value="1 adults">1 adults</option>
                </select>
              </div>
              <div className="n-adults ">
                <div className="n-wrapper">
                  <span>Number of guests unit 2</span>
                  <InfoIcon className="icon" />
                </div>
                <select name="nGuest" value={nGuest} onChange={onHandleChange}>
                  <option value="2 adults">2 adults</option>
                  <option value="1 adults, 1 child">1 adults, 1 child</option>
                  <option value="1 adult">1 adult</option>
                </select>
              </div>
            </div>
            <div className="col4">
              <span className="amount">₱ {tPrice}</span>
              <div className="n-wrapper">
                <span className="policies">Booking Policies </span>
                <InfoIcon className="icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="summary">
          <div className="left-panel">
            <span className="titleh">Price Summary</span>
            <div className="ctop">
              <div className="row1">
                <span className="title">Accommodation charges</span>
                <span className="amount">
                  <b>₱ {tPrice}</b>
                </span>
              </div>
              <div className="row2">
                <span className="title">Total price</span>
                <span className="amount">
                  <b>₱ {tPrice}</b>
                </span>
              </div>
              <span className="taxes">Prices include all local taxes.</span>
            </div>
            <div className="ccenter">
              <div className="row1">
                <span className="title">Deposit due now</span>
                <span className="amount">
                  <b>₱ {tPrice}</b>
                </span>
              </div>
              <div className="row2">
                <span className="title">Due on {dDate}</span>
                <span className="amount">
                  <b>₱ {tPrice}</b>
                </span>
              </div>
            </div>
            <div className="cbottom">
              <span className="title">Deluxe Double</span>
              <span className="t1">
                <b>Cancellation:</b> If cancelled, modified or in case of
                no-show, no penalty will be charged.
              </span>
              <span className="t1">
                <b>Payment:</b> Balance due on arrival.
              </span>
              <span className="t1">
                <b>Other policies:</b> Guests aged 12 and above are considered
                adults and require additional rate.
              </span>
            </div>
          </div>
          <div className="right-panel">
            <span className="title">Guest Details</span>
            {formStatus && (
              <p className={`form-status form-status--${formStatus.type}`} role="status">
                {formStatus.message}
              </p>
            )}

            <div className="ctop">
              <div className="row1">
                <div className="col1">
                  <label>Title</label>
                  <select name="title" value={title} onChange={onHandleChange}>
                    <option value="" disabled>
                      Select title
                    </option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                <div className="col2">
                  <span>First Name*</span>
                  <input
                    type="text"
                    required
                    name="firstname"
                    value={firstname}
                    onChange={onHandleChange}
                  />
                </div>
                <div className="col3">
                  <label>Last name*</label>
                  <input
                    type="text"
                    required
                    value={lastname}
                    name="lastname"
                    onChange={onHandleChange}
                  />
                </div>
              </div>
              <div className="row2">
                <div className="col22">
                  <label>Email*</label>
                  <input
                    type="text"
                    required
                    name="uGmail"
                    value={uGmail}
                    onChange={onHandleChange}
                  />
                </div>
                <div className="col33">
                  <label>Retype email*</label>
                  <input
                    type="text"
                    required
                    name="rGmail"
                    value={rGmail}
                    onChange={onHandleChange}
                  />
                </div>
              </div>

              <div className="row3">
                <div className="col1">
                  <span>Mobile Number</span>
                  <PhoneInput
                    name="phone"
                    value={phone}
                    onChange={setPhone}
                    defaultCountry="PH"
                    international
                    className="inputs"
                  />
                </div>
                <Nationality
                  name="country"
                  value={country}
                  onChange={onHandleChange}
                  className="select"
                />
              </div>

              <div className="row4">
                <span className="add">Additional comments(optional)</span>
                <textarea
                  rows="5"
                  cols="50"
                  name="message"
                  value={message}
                  onChange={onHandleChange}
                ></textarea>
              </div>
            </div>
            <div className="cbottom">
              <div className="row5">
                <span>Pay With</span>
                <div className="wrapper2">
                  <div className="col1">
                    <p>
                      This portfolio screen previews a booking form. It does not
                      create a reservation, process a payment, or contact the hotel.
                    </p>
                  </div>
                  <span>
                    Payment: sample pricing only; no charge will be made.
                  </span>

                  <div className="col2">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) => setAcceptedTerms(event.target.checked)}
                    />
                    <p>
                      I understand that this is a frontend-only booking preview.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-book"
                    onClick={submitMockBooking}
                  >
                    <HttpsIcon className="icon" />
                    <span>Preview demo booking</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
