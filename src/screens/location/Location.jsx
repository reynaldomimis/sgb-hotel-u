import React from "react";
import {
  AreaLocationData,
  AreaLocationInfo,
} from "../../contexts/AreaLocationData";
import "./location.scss";
import LineTitle from "../../components/linetitle/LineTitle";
import CFooter from "../../components/cfooter/CFooter";

const Location = () => {
  return (
    <>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2143238978374!2d120.60451601476531!3d16.413937934467665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a16d96de80eb%3A0xc315bf4508f1d638!2sSotogrande%20Baguio%20by%20Sta.%20Lucia!5e0!3m2!1sen!2sph!4v1664686951756!5m2!1sen!2sph"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="Soto Grande Baguio"
        />
        <LineTitle label="Soto Grande Baguio Location | Baguio City, Philippines" />
        <div className="l-panel1">
          <span className="l-t1">{AreaLocationInfo.datas.title}</span>
          <div className="l-center1">
            <span className="l-cp1">{AreaLocationInfo.datas.p1}</span>
            <span className="l-cp2">{AreaLocationInfo.datas.p2}</span>
          </div>
        </div>
        <div className="lm-info">
          <div className="img-wrapper">
          <img
            src="https://img.freepik.com/premium-photo/map-application-smartphone-car-road_34478-663.jpg?w=1060"
            alt=""
            className="cl-img"
          />
          </div>
          <ul className="cf-nav2">
            {AreaLocationData.map((item, i) => {
              return <li key={i}>{item.t1}</li>;
            })}
          </ul>
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default Location;
