import React from "react";
import { useEffect, useState } from "react";
import Section from "../Section";
import { Container } from "react-bootstrap";
import axios from "axios";

import { DEEZER_URL, HEADERS } from "../App.js";

const getMusics = async (setter) => {
  try {
    const res = await axios.get(`${DEEZER_URL}/search?q=ABBA`, {
      headers: HEADERS,
    });
    setter(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

function Home() {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    getMusics(setMusics);
  }, []);
  return (
    <Container className="mt-5">
      <Section musics={musics} />
    </Container>
  );
}

export default Home;
