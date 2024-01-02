import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  <div className="info-box">
    hi <Link to={link}></Link>
  </div>;
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, my name <span className="font-semibold">Сергій</span>
      <br />
      Junior FullStack developer
    </h1>
  ),
  2: (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        Тут можна більше взнати про мене
      </p>

      <Link to="/about" className="neo-brutalism-white neo-btn">
        Learn more
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  ),
  3: (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        Мої проекти можливо знайти тут =)
      </p>

      <Link to="/projects" className="neo-brutalism-white neo-btn">
        Learn more
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  ),
  4: (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        Тут можна більше звязатися зі мною
      </p>

      <Link to="/contacts" className="neo-brutalism-white neo-btn">
        Learn more
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
