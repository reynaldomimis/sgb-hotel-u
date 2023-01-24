import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import "./bcalendar.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BCalendar = (props) => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  const [fiat, setFiat] = useState("");

  const handleChange = (e) => {
    setFiat(e.target.value);
  };

  const handleStartDateChange = (d) => {
    let e = d.target.value();
    setStartDate(e);
    props.onStartEndDate(e, endDate);
  };

  const handleEndDateChange = (d) => {
    let e = d.target.value();
    setEndDate(e);
    props.onStartEndDate(startDate, e);
  };

  return (
    <>
      <div className="bc-main">
        <div className="bc-row">
          <div className="bc-left">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                className="d-col"
                startDate={startDate}
                endDate={endDate}
                renderInput={(params) => <TextField {...params} />}
                value={startDate}
                onChange={handleStartDateChange}
              />
            </LocalizationProvider>
          </div>
          <div className="bc-right">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                className="d-col"
                startDate={startDate}
                endDate={endDate}
                renderInput={(params) => <TextField {...params} />}
                value={endDate}
                onChange={handleEndDateChange}
              />
            </LocalizationProvider>
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
    </>
  );
};

export default BCalendar;
