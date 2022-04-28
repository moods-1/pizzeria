import React from "react";
import {data} from "../../backend/data";
import HomeGallery from "./HomeGallery";
import HomeProfile from "./HomeProfile";
import HomeShowcase from "./HomeShowcase";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-main-container">
      <HomeShowcase />
      <HomeGallery products={data} />
      <HomeProfile />
    </div>
  );
};
export default Home;
