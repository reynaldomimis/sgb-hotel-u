import React, { useState } from "react";
import Booking from "../booking/Booking";
import "./reservation.scss";
import LineHeader from "../../components/lineheader/LineHeader";
import HSwiper from "../../components/hswiper/HSwiper";
import CFooter from "../../components/cfooter/CFooter";
import { availDateList } from "../../contexts/InfoList";
import DatePicker from "react-datepicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Moment from "moment";

const Reservation = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [getUnit, setGetUnit] = useState(0);
  const [avail, setAvail] = useState(availDateList);
  const [fiat, setFiat] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const customStyles = {
    calendarContainer: {
      background: "none",
    },
    dayInRange: {
      background: "blue",
      color: "white",
    },
  };
  const handleChange = (e) => {
    setFiat(e.target.value);
  };

  const onUnitChange = (e) => {
    e.preventDefault();
    setGetUnit(e.target.value);
  };

  const getAmountTotal = (price) => {
    return (price * getUnit).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const onHandleCancel = () => {
    getAmountTotal();
    setGetUnit("");
    setStartDate("");
    setEndDate("");
    setAvail(
      avail.map((item) => {
        return { ...item, nGuests: "" };
      })
    );
  };

  return (
    <>
      <div className="reserv">
        <HSwiper />
        <LineHeader title="Reservation" />
        <div className="bc-cal">
          <div className="bc-row">
            <div className="bc-left">
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                placeholderText="Start Date"
                startDate={startDate}
                endDate={endDate}
                customStyles={customStyles}
                className="d-col"
                selectsStart
              />
            </div>
            <div className="bc-right">
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                placeholderText="End Date"
                startDate={startDate}
                className="d-col"
                endDate={endDate}
                customStyles={customStyles}
                selectsEnd
              />
            </div>
          </div>
          <div className="bc-fiat">
            <FormControl
              sx={{ m: 1, minWidth: 200 }}
              size="small"
              className="bc-form"
            >
              <InputLabel>Currency</InputLabel>
              <Select value={fiat} label="Currency" onChange={handleChange}>
                <MenuItem value="">
                  <em>Default</em>
                </MenuItem>
                <MenuItem value="usd">United States dollar</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {avail.length > 0 &&
          avail.map((item, i) => {
            return (
              <Booking
                key={i}
                uriIMG={item.uriIMG}
                rBooked={item.rBooked}
                bedSize={item.bedSize}
                dRooms={item.dRooms}
                listAmenities={item.aminities.map((k, i) => {
                  return <li key={i}>{k}</li>;
                })}
                cDate={item.cDate}
                nGuests={item.nGuests}
                amount={item.amount
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                nUnits={item.nUnits.map((n) => {
                  return (
                    <option value={n} key={i}>
                      {n} rooms
                    </option>
                  );
                })}
                dBooked={item.rBooked}
                dGuests={`${item.nGuests} adults`}
                rooms={`${getUnit} rooms`}
                onUnit={onUnitChange}
                dAmount={getAmountTotal(item.amount)}
                onCancelBooking={onHandleCancel}
                checkIn={Moment(startDate).format("DD-MM-YYYY")}
                checkOut={Moment(endDate).format("DD-MM-YYYY")}
              />
            );
          })}
      </div>
      <CFooter />
    </>
  );
};

export default Reservation;
