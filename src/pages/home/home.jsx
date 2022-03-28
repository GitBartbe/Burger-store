import React from "react";
import Details from "../../components/details/details";
import HomeTitle from "../../components/home-title/home-title";
import "./home.styles.scss";

export default function Home() {
  return (
    <div className="home">
      <HomeTitle />
      <Details />
    </div>
  );
}
