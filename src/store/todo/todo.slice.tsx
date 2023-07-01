import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { List, Task, TodosSliceState } from "./todo.types";

const initialState: TodosSliceState = {
  lists: {},
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoList: (state, action: PayloadAction<List>) => {
       state.lists[action.payload.id] = action.payload;
    },
    removeTodoList: (state, action: PayloadAction<string>) => {
      delete state.lists[action.payload];
    },
    updateTodoList: (state, action: PayloadAction<List>) => {
      let updatedItem = state.lists[action.payload.id];
      state.lists[action.payload.id] = {...updatedItem, name: action.payload.name};
    },
    addTaskToList: (
      state,
      action: PayloadAction<{ listId: string; task: Task }>
    ) => {
      const { listId, task } = action.payload;
      state.lists[listId].tasks.push(task);
    },
    toggleTaskCompletion: (
      state,
      action: PayloadAction<{ listId: string; taskId: string }>
    ) => {
      const { listId, taskId } = action.payload;
      const task = state.lists[listId].tasks.find(t => t.id === taskId);
      if (task) {
        task.completion = !task.completion;
      }
    },
  },
});

export const { 
                addTodoList,
                removeTodoList, 
                updateTodoList, 
                addTaskToList,
                toggleTaskCompletion,
              } = todosSlice.actions;