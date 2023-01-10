import React, { useState } from "react";
import "./home.css";
import Header from "./header";
import LeftBar from "./left-bar";
import Contador from "./contador/contador";

function Home() {
  /* By default (I could change) */
  const [pomodoro, setPomodoro] = useState({
    horas: 1,
    minutos: 30,
    segundos: 0,
  });
  const [descanso, setDescanso] = useState({
    horas: 0,
    minutos: 30,
    segundos: 0,
  });
  return (
    <div className="main-container">
      <Contador />
      <Header />
      <LeftBar />
    </div>
  );
}

export default Home;
