"use client";

import TaskForm from "@/components/TaskForm/taskForm";
import TaskList from "@/components/TaskList/taskList";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<any | null>([]);

  const handleNewTask = (task: any) => {
    setTasks((prevTasks: any) => [...prevTasks, task]);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task: any) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="flex flex-row gap-4 justify-center">
        <TaskForm tasks={tasks} newTask={handleNewTask}></TaskForm>
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}></TaskList>
      </div>
    </>
  );
}
