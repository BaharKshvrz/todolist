export interface Task {
    id: string;
    completion: boolean;
    title: string;
    date: Date;
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