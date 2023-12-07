export interface SubTask {
  title: string;
  isCompleted: boolean;
}

export interface Task {
  id: string;
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
  [key: string]: any;
};
