import React, { useState } from "react";
import Buttons from "./buttons";
import HeaderPomodoro from "./header-pomodoro";
import Pomodoro from "./pomodoro/pomodoro";

function Contador() {
  //!Creando los estados de POMODORO
  //!Creando estados para los botones
  return (
    <div className="contador">
      <HeaderPomodoro />
      <Pomodoro />
    </div>
  );
}

export default Contador;
