import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import "./cabout.scss";
import { InfoList } from "../../contexts/InfoList";

const CAbout = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper1"
      >
        {InfoList.map((item, i) => {
          return (
            <SwiperSlide key={i} className={item.cName}>
              <span className="s-title">{item.title}</span>
              <p className="s-des">{item.des}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CAbout;
