import React from "react";
import { Row } from "react-bootstrap";
import FilmCard from "./FilmCard";

function Section({ musics }) {
  return (
    <Row>
      {musics.map((music) => (
        <FilmCard key={music.id} music={music} />
      ))}
    </Row>
  );
}

export default Section;
