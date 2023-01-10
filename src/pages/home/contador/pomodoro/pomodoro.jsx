import React from "react";
import Work from "./work";
import Tasks from "./tasks";
import Buttons from "../buttons";

function Pomodoro() {
  return (
    <div className="grand-father-pomodoro">
      <div className="container-father-pomodoro">
        <div>
          <Work />
          <Buttons />
        </div>
        {/* <div>
          <Tasks />
        </div> */}
      </div>
    </div>
  );
}

export default Pomodoro;
