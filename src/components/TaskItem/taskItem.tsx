import { useState } from "react";

function TaskItem(props: {
  id: number;
  task: string;
  creationDate: string;
  completed: boolean;
  onDeleteTask: (taskId: number) => void;
}) {
  const [taskState, setTaskState] = useState(props.completed);

  const handleTaskState = () => {
    if (taskState === false) {
      setTaskState(true);
    }
  };

  const handleDeleteTask = () => {
    props.onDeleteTask(props.id);
  };
  return (
    <>
      <div className="flex flex-col border border-gray-300 rounded p-2 w-80 m-2">
        <div className="flex flex-row gap-2 justify-between  ">
          {" "}
          <p
            className={
              taskState ? `line-through decoration-red-800 decoration-2 ` : ``
            }
          >
            {props.task}{" "}
          </p>{" "}
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={
                taskState
                  ? "w-5 h-5 bg-green-600 rounded-full text-white"
                  : "w-5 h-5 hover:bg-green-600 rounded-full bg-gray-400 text-white "
              }
              onClick={() => {
                handleTaskState();
              }}
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 hover:bg-red-600 rounded-full bg-red-400 text-white"
              onClick={() => {
                handleDeleteTask();
              }}
            >
              <path
                fillRule="evenodd"
                d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p className="text-xs place-self-end">
          Fecha de creacion:{props.creationDate}
        </p>
      </div>
    </>
  );
}

export default TaskItem;
