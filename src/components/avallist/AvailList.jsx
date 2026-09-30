import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "./availlist.scss";

const AvailList = (props) => {
  return (
    <section className="availability-list" aria-label="Sample availability">
      <span className="hs-title1">Sample availability</span>
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
          },
          "@0.75": {
            slidesPerView: 4,
          },
          "@1.00": {
            slidesPerView: 5,
          },
          "@1.50": {
            slidesPerView: 7,
          },
        }}
        className="mySwiper8"
      >
        {props.children}
      </Swiper>
    </section>
  );
};

export default AvailList;
