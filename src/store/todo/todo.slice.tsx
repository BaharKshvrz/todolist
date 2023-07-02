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

    updateTaskInList: (
      state,
      action: PayloadAction<{ listId: string; task: Task }>
    ) => {
      const { listId, task } = action.payload;
      const list = state.lists[listId];
      const taskIndex = list.tasks.findIndex((item) => item.id === task.id);
      if (taskIndex !== -1) {
        list.tasks[taskIndex] = { ...list.tasks[taskIndex], ...task };
      }
    },
    removeTaskFromList: (
      state,
      action: PayloadAction<{ listId: string; taskId: string }>
    ) => {
      const { listId, taskId } = action.payload;
      let selectedList = state.lists[listId];
      const filteredTasks= selectedList.tasks.filter(task => task.id !== taskId);
      state.lists[listId].tasks = filteredTasks;
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
                updateTaskInList,
                toggleTaskCompletion,
                removeTaskFromList,
              } = todosSlice.actions;