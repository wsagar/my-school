import React from "react";

export const News = () => {
  const news = [
    "1.Admission opens for standards 7-10",
    "2.Due to pandamic school fees will reduced by 15%",
    "3.Students should be present for atleast 75% to appear for final exam",
  ];

  return (
    <div>
      <div className="news_banner">
        <marquee>
          <p className="news_headings">{news.join("  , ")}</p>
        </marquee>
      </div>
    </div>
  );
};

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  const schoolDetails = {
    name: "New High School",
    address: "West wood road , near deushe bank , mumbai 430213",
    principle: "Hr Vishwas dample",
  };
  return (
    <div className="page-details home-page">
      <News></News>
      <fieldset>
        <legend>{schoolDetails.name}</legend>
        <div className="school_details">
          <div>
            <label>School Name</label>
            <strong>{schoolDetails.name}</strong>
          </div>
          <div>
            <label>Address</label>
            <strong>{schoolDetails.address}</strong>
          </div>
          <div>
            <label>Principle</label>
            <strong>{schoolDetails.principle}</strong>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
