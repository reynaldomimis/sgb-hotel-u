import React, { useState } from "react";
import "./home.scss";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import HCardRooms from "../../components/hcardrooms/HCardRooms";
import HCardList from "../../contexts/HCardList";
import CCardBooking from "../../components/ccardbooking/CCardBooking";
import { hParags } from "../../contexts/InfoList";
import LineTitle from "../../components/linetitle/LineTitle";
import LineHeader from "../../components/lineheader/LineHeader";
import About from "../about/About";
import CFooter from "../../components/cfooter/CFooter";
import { Link } from "react-router-dom";

const Home = () => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "day"));

  return (
    <>
      <div className="home">
        <div className="h-main">
          <div data-aos="fade-right" className="h-brow">
            <div className="h-left">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Check-in"
                  renderInput={(params) => <TextField {...params} />}
                  value={startDate}
                  onChange={(start) => {
                    setStartDate(start);
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="h-center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="d-wrapper"
                  label="Check-out"
                  renderInput={(params) => <TextField {...params} />}
                  value={endDate}
                  minDate={startDate || undefined}
                  onChange={(end) => {
                    setEndDate(end);
                  }}
                />
              </LocalizationProvider>
            </div>
            <Link
              className="h-rights"
              to="/reservation"
            >
              <span className="d-book">BOOK NOW</span>
            </Link>
          </div>
        </div>
        <LineTitle label="Soto Grande Baguio Hotel | Baguio City, Philippines" />
        <div className="h-p-wrapper">
          <p className="h-p1">{hParags.p1}</p>
          <p className="h-p2">{hParags.p2}</p>
        </div>
        <div className="card-wrapper">
          {HCardList.map((item) => {
            return (
              <HCardRooms
                key={item.title}
                src={item.icon}
                title={item.title}
                des={item.des}
                cName="cf-title"
                cText="cf-des"
                cImage="cf-image"
                cCard="cf-card"
              />
            );
          })}
        </div>
      </div>
      <LineHeader title="Our Rooms" />
      <div className="ccd-wrapper">
        <CCardBooking
          bC1="c-booking"
          bC2="c-booking2"
          bT1="Deluxe"
          bT2="Studio"
          bP1="2,000.00"
          bP2="4,500.00"
        />
      </div>
      <About />
      <CFooter />
    </>
  );
};

export default Home;
