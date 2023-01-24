import React from "react";
import "./ccard.scss";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

const Ccard = (props) => {
  const { name, star, time, content, icon } = props;
  return (
    <>
      <Card className="c-card">
        <CardActionArea>
          <CardContent>
            <div className="c-top">
              <img src={icon} alt="Profile" className="c-pro" />
              <div className="c-name">
                <span className="name">{name}</span>
                <Rating
                  name="read-only"
                  value={star}
                  readOnly
                  className="c-star"
                />
                <span className="time">{time}</span>
              </div>
            </div>
            <div className="c-bottom">
              <p className="cc-content">{content}</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Ccard;
