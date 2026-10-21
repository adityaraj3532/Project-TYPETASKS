
type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

function addTask(tasks: Task[], title: string): Task[] {
  const newId = tasks.length === 0
    ? 1
    : Math.max(...tasks.map(task => task.id)) + 1;

  const newTask: Task = {
    id: newId,
    title,
    status: "todo"
  };

  return [...tasks, newTask];
}

function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map(task =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter(task => task.status === status);
}

function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter(task => task.id !== id);
}

export {
  TaskStatus,
  Task,
  addTask,
  completeTask,
  filterByStatus,
  deleteTask
};
