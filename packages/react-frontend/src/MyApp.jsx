import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Closet from "./Closet";
import NavBar from "./NavBar";
import Outfits from "./Outfits";
import Auth from "./Auth";
import OutfitGen from "./OutfitGen";
import Upload from "./Upload";
import View from "./View";

function MyApp() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Closet />} />
          <Route path="/outfits" element={<Outfits />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/outfit-gen" element={<OutfitGen />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MyApp;
