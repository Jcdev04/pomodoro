import React, { useState } from "react";
function Work({ horas, minutos, segundos, running }) {
  return (
    <div className="container-pomodoro">
      <div className="dots"></div>
      <div className="container-pomodoro-child">
        <h1 className="time">
          {horas}:{minutos >= 10 ? minutos : "0" + minutos}:
          {segundos >= 10 ? segundos : "0" + segundos}
        </h1>
      </div>
    </div>
  );
}

export default Work;
