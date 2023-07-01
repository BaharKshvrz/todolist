export interface Task {
    id: string;
    title: string;
    completion: boolean;
    date?: Date;
}

export interface List {
    name: string;
    id: string;
    tasks: Task[];
  }
  
  export interface Lists {
    [id: string]: List
  }

export interface TodosSliceState {
    lists: Lists;
  }