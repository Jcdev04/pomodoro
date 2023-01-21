import React, { useEffect, useState } from "react";
import Buttons from "./pomodoro/buttons";
import HeaderPomodoro from "./header-pomodoro";
import Pomodoro from "./pomodoro/pomodoro";

function Contador({ pomodoro, descanso, tasksNow, setTasksNow }) {
  const [working, setWorking] = useState(true);
  const [displayTasks, setDisplayTasks] = useState(false);
  //!Creando los estados de POMODORO
  //!Creando estados para los botones

  return (
    <div className="contador">
      <HeaderPomodoro
        setDisplayTasks={setDisplayTasks}
        setWorking={setWorking}
        working={working}
      />
      <Pomodoro
        setWorking={setWorking}
        working={working}
        time={working ? pomodoro : descanso}
        tasksNow={tasksNow}
        setTasksNow={setTasksNow}
        displayTasks={displayTasks}
      />
    </div>
  );
}

export default Contador;
