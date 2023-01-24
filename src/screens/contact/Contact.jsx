import React, { useState } from "react";
import "./contact.scss";
import Nationality from "../../components/option/Option";
import TextArea from "../../components/textarea/TextArea";
import Icon from "../../images/con1.png";
import Modal from "react-bootstrap/Modal";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import CButton from "../../components/buttons/CButton";

const Contact = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const [phone, setPhone] = useState();
  const [info, setInfo] = useState({
    label: "",
    fullname: "",
    gmail: "",
    nationality: "",
    message: "",
  });

  const { label, fullname, gmail, nationality, message } = info;

  const onHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const clientParams = {
    gmail: gmail,
    area: message,
    label: label,
    fullname: fullname,
    nationality: nationality,
    phone: phone,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        `${process.env.REACT_APP_SERVICE}`,
        `${process.env.REACT_APP_TEMPLATE}`,
        clientParams,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        () => {
          setInfo({
            label: "",
            fullname: "",
            gmail: "",
            nationality: "",
            message: "",
          });
          setPhone();
        },

        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <Modal show={show} onHide={handleShow} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2143238978374!2d120.60451601476531!3d16.413937934467665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a16d96de80eb%3A0xc315bf4508f1d638!2sSotogrande%20Baguio%20by%20Sta.%20Lucia!5e0!3m2!1sen!2sph!4v1664686951756!5m2!1sen!2sph"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="Soto Grande Baguio"
          />
        </Modal.Body>
      </Modal>
      <div className="wrapper-con">
        <div className="main-slider">
          <div className="contact">
            <div className="left-content">
              <img src={Icon} alt="" className="con" />
              <p>
                <b>Address:</b> Leonard Wood Rd, Baguio City, Philippines, 2600
              </p>
              <p onClick={handleShow}>
                <b className="view">Click here</b> to view our location
              </p>
              <p className="mob">
                <b>Mobile Number:</b> 0916 311 9388
              </p>
              <p>
                <b>Email: </b>staluciamarketingph@gmail.com
              </p>
              <p>
                <b>Facebook: </b> https://www.facebook.com/stalucialandinter/
              </p>
            </div>
            <div className="right-content">
              <div className="right-wrapper">
                <div className="title-wrapper">
                  <span>Title</span>
                  <select value={label} name="label" onChange={onHandleChange}>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                </div>
                <div className="full">
                  <span> Full Name</span>
                  <input
                    value={fullname}
                    type="text"
                    name="fullname"
                    style={{ textTransform: "uppercase" }}
                    onChange={onHandleChange}
                  />
                </div>
              </div>
              <div className="email">
                <span> Email</span>
                <input
                  type="email"
                  value={gmail}
                  name="gmail"
                  onChange={onHandleChange}
                />
              </div>
              <div className="contact1">
                <span>Mobile Number</span>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  name="phone"
                  onChange={setPhone}
                  defaultCountry="PH"
                  international
                />
              </div>
              <Nationality
                name="nationality"
                value={nationality}
                onChange={onHandleChange}
              />
              <TextArea
                name="message"
                value={message}
                onChange={onHandleChange}
              />
              <CButton
                bName="book-wrapper "
                label="Submit"
                onClick={sendEmail}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
