import React from "react";
import "./facilities.scss";
import LineTitle from "../../components/linetitle/LineTitle";
import CFlistCard from "../../components/cflistcard/CFlistCard";
import HSwiper from "../../components/hswiper/HSwiper";
import CFooter from "../../components/cfooter/CFooter";
import { BuildingList } from "../../contexts/ImageList";

const Facilities = () => {
  return (
    <>
      <div className="f-fac">
        <HSwiper images={BuildingList} label="Hotel facilities" />
        <LineTitle label="Soto Grande Baguio Hotel: Facilities" />
        <CFlistCard />
      </div>
      <CFooter />
    </>
  );
};

export default Facilities;
