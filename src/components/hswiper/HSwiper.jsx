import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { RoomList } from "../../contexts/ImageList";
import "./hswiper.scss";

const HSwiper = ({ images = RoomList, label = "Soto Grande Baguio gallery" }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      className="mySwiper hero-swiper"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
      {images.map((item, index) => (
        <SwiperSlide className="sw-wrapper" key={`${item}-${index}`}>
          <img src={item} alt={`${label}, slide ${index + 1}`} className="sw-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HSwiper;
