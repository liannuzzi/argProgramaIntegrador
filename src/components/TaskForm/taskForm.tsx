"use client";

function TaskForm(props: { tasks: string[]; newTask: any }) {
  const addTask = () => {
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input") as HTMLInputElement;
    if (taskList && taskInput.value !== "") {
      const taskListLen = props.tasks.length;
      const now = new Date();
      props.newTask({
        id: taskListLen + 1,
        task: taskInput.value,
        creationDate: now.toLocaleDateString(),
        complete: false,
      });
      taskInput.value = "";
    } else if (taskInput.value === "") {
      alert("Ingrese una tarea");
    }
  };
  return (
    <div className="border-r-2 border-black flex flex-col items-center m-2 p-2 gap-2">
      <h1>Agregar tarea</h1>
      <div className="flex flex-row items-center gap-2">
        <input
          id="task-input"
          type="text"
          placeholder="Ingrese nueva tarea"
          className="border border-2 border-gray-300 rounded-full p-1"
        />
        <button
          onClick={addTask}
          className="rounded-full bg-blue-500 text-white
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
