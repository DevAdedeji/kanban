export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface BoardType {
  id: string;
  name: string;
  todo: Task[];
  inprogress: Task[];
  done: Task[];
  dump: Task[];
}

export interface BoardForm {
  name: string;
  user_id: string;
}

export interface TaskForm {
  id: string;
  title: string;
  description: string;
  status: string;
}
