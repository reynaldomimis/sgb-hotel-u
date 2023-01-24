import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { RoomList } from "../../contexts/ImageList";
import "./hswiper.scss";

const HSwiper = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        style={{ marginBottom: "1rem" }}
        className="mySwiper"
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {RoomList.map((item, i) => {
          return (
            <SwiperSlide className="sw-wrapper" key={i}>
              <img src={item} alt="slider" className="sw-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HSwiper;
