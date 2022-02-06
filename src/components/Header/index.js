import React from "react";
import "./styles.css";
import Img from "../../assets/images/Vector.png";
import ImgIcon from "../../assets/images/Vector 1.png";

function Header() {
  return (
    <div className="MyHeader">
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          alignContent: "space-around",
        }}
      >
        <div
          style={{
            marginRight: "30px",
            display: "flex",
            position: "relative",
            top: 10,
          }}
        >
          <img className="Image" src={Img} alt={Img} />
        </div>
        <div
          style={{
            marginRight: "20px",
            display: "flex",
            position: "relative",
            top: 10,
          }}
        >
          <img className="ImageIcon" src={ImgIcon} alt={ImgIcon} />
        </div>
      </div>
      <strong className="TextInit">Truephone</strong>
    </div>
  );
}

export default Header;
