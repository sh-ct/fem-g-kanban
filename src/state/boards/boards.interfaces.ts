import { Subscription } from 'rxjs';

export interface BoardRoute {
  name: string;
  id: number;
}

export interface Board extends BoardRoute {
  columns: BoardColumn[];
}

export interface BoardColumn {
  name: string;
  tasks: Task[];
  id: number;
}

export interface Task {
  title: string;
  description: string;
  status: TaskStatus;
  subtasks: SubtaskData[];
  id: number;
}

export interface SubtaskData {
  title: string;
  isCompleted: boolean;
}

export type TaskStatus = 'Doing'|'Todo'|'Done'|'';


/*
   Just used while mocking data services
*/

export interface _Data {
  boards: {
    name: string;
    columns: {
      name: string;
      tasks: {
        title: string;
        description: string;
        status: string;
        subtasks: {
          title: string;
          isCompleted: boolean;
        }[];
      }[];
    }[];
  }[];
}

