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
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [bdatas, setBdatas] = useState({
    message: "",
    title: "",
    firstname: "",
    lastname: "",
    country: "",
    uGmail: "",
    rGmail: "",
    cIn: "Saturday, November 26, 2022 from 14:00",
    cOut: "Saturday, November 27, 2022 from 10:00",
    cDate: "Nov 18, 2022",
    dDate: "Nov 20, 2022",
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
    e.preventDefault();
    const { name, value } = e.target;
    setBdatas({ ...bdatas, [name]: value });
  };

  const sendEmail = () => {
    if (title === "") {
      setErrorMessage("Required title");
      setIsSuccess(true);
    } else if (firstname === "") {
      setErrorMessage("Required firstname");
      setIsSuccess(true);
    } else if (lastname === "") {
      setErrorMessage("Required lastname");
      setIsSuccess(true);
    } else if (uGmail === "") {
      setErrorMessage("Required gmail");
      setIsSuccess(true);
    } else if (rGmail === "") {
      setErrorMessage("Required to re-type gmail");
      setIsSuccess(true);
    } else if (uGmail !== rGmail) {
      setErrorMessage("Not match your gmail account");
      setIsSuccess(true);
    } else if (phone == null) {
      setErrorMessage("Required mobile number");
      setIsSuccess(true);
    } else if (country === "") {
      setErrorMessage("Required country");
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
      alert("Testing");
      setBdatas({
        message: "",
        title: "",
        firstname: "",
        lastname: "",
        country: "",
        uGmail: "",
        rGmail: "",
        nUnit: "",
        nGuest: "",
      });
      setPhone();
    }
  };

  return (
    <div className="details">
      <div className="wrapper">
        <div className="logo">
          <img src={soto} className="soto" alt="" />
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
            {isSuccess ? (
              <h6
                style={{ color: "red", marginLeft: "2rem", marginTop: "1rem" }}
              >
                {errorMessage}
              </h6>
            ) : (
              ""
            )}

            <div className="ctop">
              <div className="row1">
                <div className="col1">
                  <label>Title</label>
                  <select name="title" value={title} onChange={onHandleChange}>
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
                  style={{ outline: "none" }}
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
                      We guarantee your booking now and we will contact you soon
                      to inform about the payment policies. By clicking on the
                      button below you indicate that you have read and agree to
                      the Booking Policies.
                    </p>
                  </div>
                  <span>
                    Payment: Full booking item amount will be charged.
                  </span>

                  <div className="col2">
                    <input type="checkbox" />
                    <p>
                      Please check this box to indicate that you have read and
                      agree to the Booking Policies.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-book"
                    onClick={sendEmail}
                  >
                    <HttpsIcon className="icon" />
                    <h5>Confirm and book</h5>
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
