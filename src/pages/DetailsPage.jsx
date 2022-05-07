import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DEEZER_URL, HEADERS } from "../App.js";
import { Container } from "react-bootstrap";

const getMusicById = async (ID, setter) => {
  try {
    const res = await axios.get(`${DEEZER_URL}/track/${ID}`, {
      headers: HEADERS,
    });
    setter(res.data);
  } catch (error) {
    console.log(error);
  }
};

function DetailsPage() {
  const [music, setMusic] = useState(null);
  // Retrieve parameter MUST BE THE SAME defined on the Route
  const { musicID } = useParams();

  useEffect(() => {
    getMusicById(musicID, setMusic);
  }, []);

  return (
    <Container>
      {music ? (
        <div className="d-flex flex-column">
          <h2>Music title: {music.title}</h2>
          <h6>Album title: {music.album.title}</h6>
          <img
            src={music.album.cover}
            style={{ maxHeight: "256px", objectFit: "cover" }}
          />
          <h5>{music.release_date}</h5>
        </div>
      ) : (
        <h3>...Loading</h3>
      )}
    </Container>
  );
}

export default DetailsPage;
