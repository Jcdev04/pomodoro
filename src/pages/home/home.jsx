import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "./header";
import LeftBar from "./left-bar";
import Contador from "./contador/contador";
import { nanoid } from "nanoid";

function Home() {
  useEffect(() => {
    // Create a div element to render the popup in
    const popupContainer = document.createElement("div");
    // Append the div to the body
    document.body.appendChild(popupContainer);
    // Cleanup function to remove the div when the component unmounts
    return () => {
      document.body.removeChild(popupContainer);
    };
  }, []);

  /* By default (I could change this when I open settings) */
  const [pomodoro, setPomodoro] = useState({
    horas: 0,
    minutos: 0,
    segundos: 2,
  });
  const [descanso, setDescanso] = useState({
    horas: 0,
    minutos: 0,
    segundos: 1,
  });
  const [tasksNow, setTasksNow] = useState([
    {
      key: nanoid(10),
      name: "",
      description: "",
      completed: false,
    },
  ]);
  /* !Cuando pase a descanso  */
  const [tasks, setTasks] = useState([[]]);
  return (
    <div className="main-container">
      <Contador
        tasksNow={tasksNow}
        setTasksNow={setTasksNow}
        pomodoro={pomodoro}
        descanso={descanso}
      />
      <Header setPomodoro={setPomodoro} setDescanso={setDescanso} />
      <LeftBar task={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Home;
