import React from "react";
import Card from "react-bootstrap/Card";

const HCardRooms = ({cCard, src, title, des, cName, cText, cImage }) => {
  return (
    <>
      <Card
        className={cCard}
      >
        <Card.Img variant="top" src={ src } className={cImage} />
        <Card.Body>
          <Card.Title className={cName}>{title}</Card.Title>
          <Card.Text className={cText}>{des}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default HCardRooms;
