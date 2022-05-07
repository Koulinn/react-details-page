import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FilmCard({ music }) {
  const {
    title,
    album: { cover_medium },
  } = music;

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={cover_medium} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* Send the user to the detailPage with a dynamic parameter */}
          <Link to={`detail/${music.id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FilmCard;
