import React from "react";
import Ccard from "../cardreviews/Ccard";
import RData from "../../contexts/ReviewsData";
import { Col, Row } from "react-bootstrap";

const AdvisorReviews = () => {
  return (
    <>
      <Row style={{ marginTop: "1rem" }}>
        {RData.map((item, index) => {
          return (
            <Col sm md lg={4}>
              <Ccard
                key={index}
                icon={item.icon}
                name={item.name}
                star={item.star}
                time={item.time}
                content={item.content}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AdvisorReviews;
