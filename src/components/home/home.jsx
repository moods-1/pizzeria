import React, { useEffect } from "react";
import {data} from "../../backend/data";
import HomeGallery from "./HomeGallery";
import HomeProfile from "./HomeProfile";
import HomeShowcase from "./HomeShowcase";
import "./Home.scss";

const Home = () => {
  useEffect(() =>
    document
      .querySelector(".home-gallery")
      .lastChild.classList.add("optional-gallery-box")
  );
  return (
    <div className="home-main-container">
      <HomeShowcase />
      <HomeGallery products={data} />
      <HomeProfile />
    </div>
  );
};
export default Home;
