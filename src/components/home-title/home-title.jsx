import React from "react";
import "./home-title.styles.scss";
import CustomButton from "../custom-button/custom-button";

export default function HomeTitle() {
  return (
    <div className="home-title">
    <h1>The best burger in town</h1>
    <CustomButton className={'gradient'} > Check our menu </CustomButton>
    </div>
  );
}
