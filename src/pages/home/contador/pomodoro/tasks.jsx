import React from "react";
import { AddCircle, Edit, Trash } from "iconoir-react";
import { nanoid } from "nanoid";
import { motion, AnimatePresence } from "framer-motion";

function Tasks({ tasksNow, setTasksNow }) {
  const addTask = () => {
    setTasksNow([
      ...tasksNow,
      {
        key: nanoid(),
        name: "",
        description: "",
        completed: false,
      },
    ]);
  };
  const deleteTask = (index) => {
    if (tasksNow.length > 1) {
      const newTasks = [...tasksNow];
      newTasks.splice(index, 1);
      setTasksNow(newTasks);
    }
  };

  const modificarCompleted = (index) => {
    const newTasks = [...tasksNow];
    newTasks[index].completed = !newTasks[index].completed;
    setTasksNow(newTasks);
  };
  const modificarName = (index, e) => {
    const newTasks = [...tasksNow];
    newTasks[index].name = e.target.value;
    setTasksNow(newTasks);
  };

  return (
    <div className="container-tasks" style={{ height: "100%" }}>
      <button onClick={addTask} className="agregar-task">
        <AddCircle className="addCircle" fontSize={16} />
        <p>Agregar tarea</p>
      </button>
      <div
        className="task-scrolling"
        style={{ maxHeight: "410px", overflow: "auto" }}
      >
        <AnimatePresence>
          {tasksNow.map((task, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  height: 0,
                  overflow: "hidden",
                  margin: "0px 0px",
                }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="container-inputs"
                key={task.key}
              >
                <section className="inputs-tasks">
                  <div className="checkbox-wrapper-24">
                    <input
                      onChange={() => modificarCompleted(index)}
                      value={task.completed}
                      type="checkbox"
                      id={task.key}
                      name="check"
                    />
                    <label htmlFor={task.key}>
                      <span></span>
                    </label>
                  </div>

                  <input
                    value={task.name}
                    onChange={(e) => modificarName(index, e)}
                    placeholder={"Tarea " + (index + 1)}
                    className="task-name"
                    type="text"
                  />
                </section>
                <section className="options-tasks">
                  <Edit />
                  <Trash onClick={() => deleteTask(index)} />
                </section>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Tasks;
