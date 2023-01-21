import React from "react";

function HeaderPomodoro({ setWorking, setDisplayTasks }) {
  function timePomodoro() {
    setWorking(true);
    setDisplayTasks(false);
  }
  function timeDescanso() {
    setWorking(false);
    setDisplayTasks(false);
  }
  function timeTasks() {
    setDisplayTasks(true);
  }
  return (
    <ul className="header-pomodoro-container">
      <li onClick={timePomodoro}>Pomodoro</li>
      <li onClick={timeDescanso}>Descanso</li>
      <li onClick={timeTasks}>Tareas</li>
    </ul>
  );
}

export default HeaderPomodoro;
