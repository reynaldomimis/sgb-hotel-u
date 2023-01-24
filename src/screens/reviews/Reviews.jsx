import React from "react";
import "./reviews.scss";
import SmallHeader from "../../components/smallheader/SmallHeader";
import Ccard from "../../components/cardreviews/Ccard";
import RData from "../../contexts/ReviewsData";
import CFooter from "../../components/cfooter/CFooter";

const Reviews = () => {
  return (
    <>
      <div className="review">
        <SmallHeader title="Soto Grande Baguio - Feedbacks" cTitle="sh-title" />
        <div className="re-card">
          {RData.map((item, index) => {
            return (
              <Ccard
                key={index}
                icon={item.icon}
                name={item.name}
                star={item.star}
                time={item.time}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default Reviews;
