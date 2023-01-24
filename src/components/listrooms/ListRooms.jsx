import React, { useState } from "react";
import "./listrooms.scss";
import { MenuRoomsType } from "../../contexts/MenuItems";

const ListRooms = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showIcon, setShowIcon] = useState("");
  const [showTitle, setShowTitle] = useState("");
  const [showMeter, setShowMeter] = useState();
  const [showMax, setShowMax] = useState();

  const getRoomTypeData = (title, img, sqm, guest) => {
    setShowIcon(img);
    setShowTitle(title);
    setShowMeter(sqm);
    setShowMax(guest);
    setShowInfo(true);
  };

  return (
    <>
      <div className="lt-wrapper">
        <ul className="ul">
          {MenuRoomsType.map((item, i) => {
            return (
              <li
                onClick={() =>
                  getRoomTypeData(item.title, item.img, item.sqm, item.mGuest)
                }
                key={i}
              >
                {item.title}
              </li>
            );
          })}
        </ul>

        <div className="lt-row">
          {showInfo ? (
            <img src={showIcon} alt="" className="lt-imgt" />
          ) : (
            <img
              src="https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626267/sgbh_colection/pic6_pgsidz.jpg"
              className="lt-imgt"
              alt=""
            />
          )}

          <div className="lt-col">
            <span className="lt-t1">{showInfo ? showTitle : "Studio"}</span>
            <span className="lt-l1">
              - Approximately {showInfo ? showMeter : 35.95} sqm
            </span>
            <span className="lt-l2">
              - Maximum number of paying guests: {showInfo ? showMax : 2}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRooms;
