import TaskItem from "@/components/TaskItem/taskItem";
import { useEffect } from "react";

interface Task {
  id: number;
  task: string;
  creationDate: string;
  complete: boolean;
}

interface TaskListProps {
  tasks: Task[] | null | undefined;
  onDeleteTask: (taskId: number) => void;
}

function TaskList(props: TaskListProps) {
  useEffect(() => {}, [props.tasks]);
  if (props.tasks === null || props.tasks === undefined) {
    return null;
  }

  return (
    <div>
      <h1>Listado de tareas</h1>
      <div>
        <ul id="task-list">
          {props.tasks.map((task: any) => (
            <li key={task.id}>
              <TaskItem
                id={task.id}
                task={task.task}
                creationDate={task.creationDate}
                completed={task.complete}
                onDeleteTask={props.onDeleteTask}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
