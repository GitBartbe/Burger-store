import React from "react";
import Details from "../../components/details/details";
import Footer from "../../components/footer/footer";
import HomeTitle from "../../components/home-title/home-title";
import LocationComponent from "../../components/loacation/location-component";
import "./home.styles.scss";

export default function Home() {
  return (
    <div className="home">
      <HomeTitle />
      <Details/>
      <LocationComponent />
      <Footer />
    </div>
  );
}

