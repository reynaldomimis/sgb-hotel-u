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
    amount,
    checkIn,
    checkOut,
    selectedUnit,
    isBookable,

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
            <img src={uriIMG} alt={`${rBooked} room`} className="image-room" />
            <div className="wrapper">
              <span className="title">{rBooked}</span>
              <button type="button" className="p1 p2 p3 booking-action" onClick={onShowAmenities}>
                View all amenities
              </button>
              {showAmi && <ul>{listAmenities}</ul>}
              <p className="p1">
                Bed size: {bedSize} queen Bedroom size: {dRooms} m2
              </p>
              <div className="free-wrapper">
                <div className="refund">
                  <span className="p2">No refund</span>
                  <button type="button" className="booking-icon-button" onClick={onShowRefund} aria-label="Show cancellation policy">
                    <ErrorOutlinedIcon className="error-icon" />
                  </button>
                </div>

                <div className="break">
                  <span className="p2">Breakfast included </span>
                  <button type="button" className="booking-icon-button" onClick={onShowBreakFast} aria-label="Show breakfast information">
                    <RestaurantOutlinedIcon className="res" />
                  </button>
                </div>
              </div>
              {showRefund && (
                <p className="booking-note">
                  Sample policy: cancellation terms are illustrative only.
                </p>
              )}
              {showBreakFast && (
                <p className="booking-note">
                  Sample amenity: breakfast availability is illustrative only.
                </p>
              )}
            </div>
            <div className="b-cost">
              <span className="b-details">Booking preview</span>
              <div className="b-row1">
                <span className="b-rooms">Rooms booked : {dBooked}</span>
                <span className="b-rooms">Number of units : {rooms}</span>
                <span className="b-rooms">Number of guests: {dGuests}</span>
                <span className="b-rooms">Check-in: {checkIn}</span>
                <span className="b-rooms">Check out: {checkOut}</span>
                <span className="b-tcost">
                  Sample total: ₱ {dAmount}
                </span>
              </div>
              <div className="b-row2">
                <BookNow
                  label="Cancel"
                  bName="book-wrapper3"
                  onClick={onCancelBooking}
                />
                {isBookable ? (
                  <Link to="/bookingdetails" className="booking-link">
                    <BookNow label="Preview booking" bName="book-wrapper" />
                  </Link>
                ) : (
                  <BookNow
                    label="Select dates and rooms"
                    bName="book-wrapper"
                    disabled
                  />
                )}
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
                <select value={selectedUnit} onChange={onUnit} aria-label={`Select rooms for ${rBooked}`}>
                  <option value="">
                    Select Option
                  </option>
                  {nUnits}
                </select>
                Rooms Slot
              </div>
              <div className="mright">
                <button type="button" className="booking-icon-button" onClick={onShowAvailable} aria-label="Show sample availability">
                  <CalendarMonthOutlinedIcon className="cal" />
                </button>
                Calendar
              </div>
            </div>
          </div>
          {showAvailable && (
            <div className="booking-availability">
              <AvailableDate>
                {availDateList.map((date, i) => {
                  return (
                    <SwiperSlide className="rs-ss" key={date.rBooked}>
                      <div className="al-row">
                        <span className="al-date">Not Available</span>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </AvailableDate>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Booking;
