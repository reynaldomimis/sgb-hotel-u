import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "./rswiper.scss";

const RSwiper = ({ title, data }) => {
  return (
    <>
      <span className="hs-title">{title}</span>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 2,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper2"
      >
        {data.map((item, i) => {
          return (
            <SwiperSlide key={i} className="rs-ss">
              <img src={item} alt="" className="rs-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default RSwiper;
