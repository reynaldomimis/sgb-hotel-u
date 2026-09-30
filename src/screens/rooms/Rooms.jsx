import React from "react";
import "./rooms.scss";
import LineTitle from "../../components/linetitle/LineTitle";
import { FlistData, FlistRooms } from "../../contexts/FListData";
import HSwiper from "../../components/hswiper/HSwiper";
import CFooter from "../../components/cfooter/CFooter";
import ListRooms from "../../components/listrooms/ListRooms";
import { RoomList } from "../../contexts/ImageList";

const Rooms = () => {
  return (
    <>
      <div className="r-fac">
        <HSwiper images={RoomList} label="Hotel rooms" />
        <LineTitle label="Soto Grande Baguio Hotel: Accomodation" />
        <div className="rc-lict">
          <div className="rc-content">
            <p className="rc-p1">{FlistData.rp1}</p>
            <span className="rc-t1">{FlistData.rp2}</span>
            <div className="r-navcol">
              <ul className="rc-nav">
              {FlistRooms.map((item) => {
                return (
                  <li className="li" key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
              <ListRooms />
            </div>
          </div>
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default Rooms;
