import React, { useState, useEffect } from "react";

import "./TileContainer.css";
export default function TileContainer(props) {
  const [HexCode, setHexCode] = useState("#a663c5");
  const [TextColor, setTextColor] = useState("");
  useEffect(() => {
    GenerateHexCode();
  }, []);

  function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? setTextColor("#000") : setTextColor("#FFFFFF");
  }
  function GenerateHexCode() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setHexCode("#" + randomColor);
    console.log(HexCode);
    getContrastYIQ(HexCode);
  }

  return (
    <div className="TileContainer" style={{ backgroundColor: HexCode }}>
      <div className="SecondaryContainer">
        {" "}
        <button
          className="CloseButton"
          style={{ border: "none", color: HexCode, backgroundColor: TextColor }}
          onClick={() => props.RemoveContainer(props.id)}
        >
          {" "}
          X
        </button>{" "}
      </div>
      <div className="MainContainer">
        <div className="HexCodeSection" style={{ color: TextColor }}>
          {" "}
          {HexCode}
        </div>
        <button
          className="GenColorButton"
          style={{ border: "none", color: HexCode, backgroundColor: TextColor }}
          onClick={() => GenerateHexCode()}
        >
          GENERATE COLOR
        </button>
      </div>
    </div>
  );
}
