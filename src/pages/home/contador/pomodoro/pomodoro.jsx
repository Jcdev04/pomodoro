import React, { useState, useEffect } from "react";
import Work from "./work";
import Tasks from "./tasks";
import Buttons from "./buttons";
import alarmSound1 from "../../../../assets/audio/ES_Alarm Burglar 2 - SFX Producer.mp3";
import alarmSound2 from "../../../../assets/audio/ES_Fire Alarm 2 - SFX Producer.mp3";

function Pomodoro({
  displayTasks,
  time,
  working,
  tasksNow,
  setTasksNow,
  setWorking,
}) {
  const [running, setRunning] = useState(false);
  const [horas, setHoras] = useState(time.horas),
    [minutos, setMinutos] = useState(time.minutos),
    [segundos, setSegundos] = useState(time.segundos);
  const [intervalId, setIntervalId] = useState(null);
  /* Running time */
  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        if (segundos > 0) {
          setSegundos((prevSegundos) => prevSegundos - 1);
        } else if (minutos > 0) {
          setSegundos(59);
          setMinutos((prevMinutos) => prevMinutos - 1);
        } else if (horas > 0) {
          setSegundos(59);
          setMinutos(59);
          setHoras((prevHoras) => prevHoras - 1);
        } else {
          {
            working ? playAlarm(alarmSound1) : playAlarm(alarmSound2);
          }
          setWorking((prevSetWorking) => !prevSetWorking);
          setRunning(false);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [horas, minutos, segundos, running]);

  useEffect(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    setHoras(time.horas);
    setMinutos(time.minutos);
    setSegundos(time.segundos);
  }, [working]);
  return (
    <div className="grand-father-pomodoro">
      <div
        style={{
          transform: displayTasks ? "translateX(-50%)" : "translateX(0%)",
        }}
        className="container-father-pomodoro"
      >
        <div>
          <Work
            horas={horas}
            minutos={minutos}
            segundos={segundos}
            running={running}
          />

          <Buttons
            time={time}
            setHoras={setHoras}
            setMinutos={setMinutos}
            setSegundos={setSegundos}
            setRunning={setRunning}
            running={running}
          />
        </div>
        <div>
          <Tasks tasksNow={tasksNow} setTasksNow={setTasksNow} />
        </div>
      </div>
    </div>
  );
}
const playAlarm = (alarm) => {
  const player = new Audio(alarm);
  player.play();
  setTimeout(() => {
    player.pause();
  }, 5000);
};

export default Pomodoro;
