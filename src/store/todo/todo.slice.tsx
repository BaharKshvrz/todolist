import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodosSliceState } from "./todo.types";

const initialState: TodosSliceState = {
  lists: {},
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoList: (state, action) => {
       state.lists[action.payload.id] = action.payload;
    },
    removeTodoList: (state, action: PayloadAction<string>) => {
      delete state.lists[action.payload];
    },
    updateTodoList: (state, action) => {
      console.log("updateTodoList", action)
      let updatedItem = state.lists[action.payload.id];
      state.lists[action.payload.id] = {...updatedItem, name: action.payload.name};
    }
  },
});

export const { addTodoList, removeTodoList, updateTodoList } = todosSlice.actions;