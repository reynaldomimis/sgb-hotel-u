import React, { useState } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import "./booking.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import BookNow from "../../components/buttons/CButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AvailableDate from "../../components/avallist/AvailList";
import { CCardBody } from "@coreui/react";
import { availDateList } from "../../contexts/InfoList";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Booking = (props) => {
  const {
    uriIMG,
    rBooked,
    bedSize,
    dRooms,
    listAmenities,
    cDate,
    nUnits,
    nGuests,

    //Booking Details
    dBooked,
    rooms,
    dGuests,
    dAmount,
    onCancelBooking,
    onSubmitBooking,
    amount,
    checkIn,
    checkOut,

    //selected rooms
    onUnit,
  } = props;

  const [showAmi, setShowAmi] = useState(false);
  const [showAvailable, setShowAvailable] = useState(false);
  const [showRefund, setShowRefund] = useState(false);
  const [showBreakFast, setShowBreakFast] = useState(false);

  const onShowAmenities = () => {
    setShowAmi(!showAmi);
  };
  const onShowAvailable = () => {
    setShowAvailable(!showAvailable);
  };
  const onShowRefund = () => {
    setShowRefund(!showRefund);
  };
  const onShowBreakFast = () => {
    setShowBreakFast(!showBreakFast);
  };

  return (
    <>
      <Card className="booking">
        <CardContent>
          <div className="top">
            <img src={uriIMG} alt="" className="image-room" />
            <div className="wrapper">
              <span className="title">{rBooked}</span>
              <span className="p1 p2 p3" onClick={onShowAmenities}>
                View all amenities
              </span>
              {showAmi && <ul>{listAmenities}</ul>}
              <p className="p1">
                Bed size: {bedSize} queen Bedroom size: {dRooms} m2
              </p>
              <div className="free-wrapper">
                <div className="refund">
                  <span className="p2">No refund</span>
                  <ErrorOutlinedIcon
                    className="error-icon"
                    onClick={onShowRefund}
                  />
                </div>

                <div className="break">
                  <span className="p2">Breakfast included </span>
                  <RestaurantOutlinedIcon
                    className="res"
                    onClick={onShowBreakFast}
                  />
                </div>
              </div>
              {(showRefund && (
                <h1
                  style={{ fontSize: "14px", color: "gray", marginTop: "6px" }}
                >
                  No refund available data
                </h1>
              )) ||
                (showBreakFast && (
                  <h1
                    style={{
                      fontSize: "14px",
                      color: "gray",
                      marginTop: "6px",
                    }}
                  >
                    No breakfast available data
                  </h1>
                ))}
            </div>
            <div className="b-cost">
              <span className="b-details">Rooms Details</span>
              <div className="b-row1">
                <span className="b-rooms">Rooms booked : {dBooked}</span>
                <span className="b-rooms">Number of units : {rooms}</span>
                <span className="b-rooms">Number of guests: {dGuests}</span>
                <span className="b-rooms">Check-in: {checkIn}</span>
                <span className="b-rooms">Check out: {checkOut}</span>
                <span className="b-tcost">
                  Total price: ₱ {dAmount} per night
                </span>
              </div>
              <div className="b-row2">
                <BookNow
                  label="Cancel"
                  bName="book-wrapper3"
                  onClick={onCancelBooking}
                />
                <Link to="/bookingdetails" style={{ textDecoration: "none" }}>
                  <BookNow
                    label="Book Now"
                    bName="book-wrapper"
                    onClick={onSubmitBooking}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-center">
            <div className="center">
              <div className="lcenter">
                <span className="c-title">{rBooked} - Room Only (OTA)</span>
                <span className="c-warn">Free cancellation before {cDate}</span>
              </div>
              <div className="mcenter">
                <PeopleAltOutlinedIcon className="people" />

                <span className="m-adults">{nGuests} adults</span>
              </div>
              <div className="mmid">
                <span className="m-amount">₱ {amount}</span>
                <span className="m-per">per night</span>
              </div>

              <div className="mright">
                <select value={rooms} onChange={onUnit}>
                  <option value="none" selected>
                    Select Option
                  </option>
                  {nUnits}
                </select>
                Rooms Slot
              </div>
              <div className="mright">
                <CalendarMonthOutlinedIcon
                  onClick={onShowAvailable}
                  className="cal"
                />
                Calendar
              </div>
            </div>
          </div>
          {showAvailable && (
            <CCardBody>
              <AvailableDate>
                {availDateList.map((date, i) => {
                  return (
                    <SwiperSlide className="rs-ss">
                      <div key={i} className="al-row">
                        <span className="al-date">Not Available</span>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </AvailableDate>
            </CCardBody>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Booking;
