interface SubTask {
  title: string;
  isCompleted: boolean;
}

interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: SubTask[];
}

export type BoardType = {
  id: string;
  name: string;
  todo: Task[];
  inprogress: Task[];
  done: Task[];
  dump: Task[];
};
