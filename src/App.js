import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Rooms from "./screens/rooms/Rooms";
import Facilities from "./screens/facilities/Facilities";
import Gallery from "./screens/gallery/Gallery";
import Reviews from "./screens/reviews/Reviews";
import Location from "./screens/location/Location";
import Reservation from "./screens/reservation/Reservation";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";
import BookingDetails from "./screens/bookingdetails/BookingDetails";
import Layout from "./screens/Layout/Layout";

const App = () => {
  return (
    <>
      <div className="root">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
          </Route>
          <Route path="bookingdetails" element={<BookingDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
