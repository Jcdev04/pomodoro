import React, { useState } from "react";
import { Pause, Play, Repeat } from "iconoir-react";

function Buttons() {
  const [className, setClassName] = useState("play");
  const [backgroundColor, setBackgroundColor] = useState("#f7f9f4");
  const [backgroundColor2, setBackgroundColor2] = useState("transparent");

  function handleClick() {
    setBackgroundColor(backgroundColor2);
    setBackgroundColor2(backgroundColor);
    if (className === "play") {
      setClassName("pause");
    } else {
      setClassName("play");
    }
  }
  let name = `control-time ${className}`;
  return (
    <div className="container-icons">
      <button
        className="button-controller"
        style={{
          backgroundColor: backgroundColor,
        }}
        onClick={handleClick}
      >
        <Play
          className={name}
          fontSize={50}
          color={"#282c2d"}
          strokeWidth={0.5}
        />
        <Pause
          className="control-time"
          fontSize={50}
          color={"#f7f9f4"}
          strokeWidth={0.5}
        />
      </button>
      <button className="button-controller second">
        <Repeat
          className="repeat"
          fontSize={50}
          color={"white"}
          strokeWidth={0.5}
        />
      </button>
    </div>
  );
}

export default Buttons;
