import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

export const {
  REACT_APP_DEEZER_URL: DEEZER_URL,
  REACT_APP_DEEZER_HEADER: DEEZER_HEADER,
  REACT_APP_DEEZER_RL: DEEZER_KEY,
} = process.env;

export const HEADERS = {
  "x-rapidapi-host": DEEZER_HEADER,
  "x-rapidapi-key": DEEZER_KEY,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:musicID" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
