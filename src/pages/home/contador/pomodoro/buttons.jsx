import React, { useEffect, useState } from "react";
import { Pause, Play, Repeat } from "iconoir-react";

function Buttons({
  time,
  setHoras,
  setMinutos,
  setSegundos,
  setRunning,
  running,
}) {
  /* Styles */
  const [className, setClassName] = useState("play"),
    [backgroundColor, setBackgroundColor] = useState("transparent"),
    [backgroundColor2, setBackgroundColor2] = useState("#f7f9f4");
  useEffect(() => {
    if (running) {
      setClassName("pause");
    } else {
      setClassName("play");
    }
    setBackgroundColor(backgroundColor2);
    setBackgroundColor2(backgroundColor);
  }, [running]);
  /* Controls */
  function handleClick() {
    setRunning((prevRunning) => !prevRunning);
  }
  function handleReset() {
    setHoras(time.horas);
    setMinutos(time.minutos);
    setSegundos(time.segundos);
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
      <button className="button-controller second" onClick={handleReset}>
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
