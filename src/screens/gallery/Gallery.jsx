import React from "react";
import "./gallery.scss";
import CFooter from "../../components/cfooter/CFooter";
import SmallHeader from "../../components/smallheader/SmallHeader";
import RSwiper from "../../components/rswipper/RSwiper";
import HSwiper from "../../components/hswiper/HSwiper";
import { BuildingList, RoomList } from "../../contexts/ImageList";

const Gallery = () => {
  return (
    <>
      <HSwiper data="PoolList" />
      <div className="gallery">
        <SmallHeader
          title="Soto Grande Baguio Hotel - Gallery"
          cTitle="sh-title2"
        />
        <div className="g-container">
          <RSwiper data={BuildingList} title="Discover Building" />
          <RSwiper data={RoomList} title="Discover Rooms" />
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default Gallery;
