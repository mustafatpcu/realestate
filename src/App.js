import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HouseDetails from "./components/HouseDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<HouseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
