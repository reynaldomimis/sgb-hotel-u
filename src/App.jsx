import React, { lazy, Suspense } from "react";
import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./screens/Layout/Layout"));
const Home = lazy(() => import("./screens/home/Home"));
const Rooms = lazy(() => import("./screens/rooms/Rooms"));
const Facilities = lazy(() => import("./screens/facilities/Facilities"));
const Gallery = lazy(() => import("./screens/gallery/Gallery"));
const Reviews = lazy(() => import("./screens/reviews/Reviews"));
const Location = lazy(() => import("./screens/location/Location"));
const Reservation = lazy(() => import("./screens/reservation/Reservation"));
const Contact = lazy(() => import("./screens/contact/Contact"));
const BookingDetails = lazy(() => import("./screens/bookingdetails/BookingDetails"));

const App = () => {
  return (
    <>
      <div className="root">
        <Suspense fallback={<div className="app-loading" role="status">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="facilities" element={<Facilities />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="location" element={<Location />} />
              <Route path="contact" element={<Contact />} />
              <Route path="reservation" element={<Reservation />} />
            </Route>
            <Route path="/bookingdetails" element={<BookingDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
