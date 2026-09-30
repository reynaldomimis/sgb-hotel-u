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
import dayjs from "dayjs";
import { RoomList } from "../../contexts/ImageList";

const Reservation = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedUnits, setSelectedUnits] = useState({});
  const [fiat, setFiat] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date && date > endDate) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleChange = (e) => {
    setFiat(e.target.value);
  };

  const onUnitChange = (roomName) => (event) => {
    setSelectedUnits((currentUnits) => ({
      ...currentUnits,
      [roomName]: event.target.value,
    }));
  };

  const getAmountTotal = (price, unitCount) => {
    return (price * Number(unitCount || 0))
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const onHandleCancel = (roomName) => {
    setSelectedUnits((currentUnits) => {
      const remainingUnits = { ...currentUnits };
      delete remainingUnits[roomName];
      return remainingUnits;
    });
  };

  const formatDate = (date) =>
    date ? dayjs(date).format("DD MMM YYYY") : "Select date";

  return (
    <>
      <div className="reserv">
        <HSwiper images={RoomList} label="Hotel rooms" />
        <LineHeader title="Reservation" />
        <div className="bc-cal">
          <div className="bc-row">
            <div className="bc-left">
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                placeholderText="Start Date"
                minDate={new Date()}
                startDate={startDate}
                endDate={endDate}
                className="d-col"
                selectsStart
              />
            </div>
            <div className="bc-right">
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                placeholderText="End Date"
                minDate={startDate || new Date()}
                startDate={startDate}
                className="d-col"
                endDate={endDate}
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
        {availDateList.map((item) => {
            const selectedUnit = selectedUnits[item.rBooked] || "";
            return (
              <Booking
                key={item.rBooked}
                uriIMG={item.uriIMG}
                rBooked={item.rBooked}
                bedSize={item.bedSize}
                dRooms={item.dRooms}
                listAmenities={item.aminities.map((amenity) => {
                  return <li key={amenity}>{amenity}</li>;
                })}
                cDate={item.cDate}
                nGuests={item.nGuests}
                amount={item.amount
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                nUnits={item.nUnits.map((n) => {
                  return (
                    <option value={n} key={n}>
                      {n} rooms
                    </option>
                  );
                })}
                dBooked={item.rBooked}
                dGuests={`${item.nGuests} adults`}
                rooms={selectedUnit ? `${selectedUnit} rooms` : "Not selected"}
                selectedUnit={selectedUnit}
                onUnit={onUnitChange(item.rBooked)}
                dAmount={getAmountTotal(item.amount, selectedUnit)}
                onCancelBooking={() => onHandleCancel(item.rBooked)}
                checkIn={formatDate(startDate)}
                checkOut={formatDate(endDate)}
                isBookable={Boolean(startDate && endDate && selectedUnit)}
              />
            );
          })}
      </div>
      <CFooter />
    </>
  );
};

export default Reservation;
