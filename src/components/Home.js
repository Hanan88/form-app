import React from "react";
import "./Home.css";
import img from "../images/home-img.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__img">
          <img src={img} alt="" />
        </div>
        <h2 className="home__heading">
          نظام تسجيل الفائقين و الفائقات العام الدارسي 2021 / 2022
        </h2>
        <Link to="/form" className="home__btn">
          ابدء
        </Link>
      </div>
    </div>
  );
};

export default Home;
