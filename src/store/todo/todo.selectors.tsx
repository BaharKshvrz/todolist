import { createSelector } from "@reduxjs/toolkit";
import store from "../store";
import { List, Lists } from "./todo.types";

export type RootState = ReturnType<typeof store.getState>;

// Select the lists state from the Redux store
export const selectLists = (state: RootState): Lists => state.todos.lists;

// Select a specific list by its ID
export const selectListById = (listId: string) => createSelector(selectLists, (lists: Lists) => lists[listId]?? "");

// Select the tasks for a specific list
export const selectTasksForList = (listId: string) =>
                        createSelector(selectListById(listId), (list: List | undefined) =>
                        list ? list.tasks : []
  );

// Select the task for a specific list tasks
  export const selectTaskById = (listId: string, taskId: string) =>
  createSelector(
    (state: RootState) => state.todos.lists[listId]?.tasks, // Access the tasks array of the specific list
    (tasks) => tasks?.find((task) => task.id === taskId) // Find the task with the specified ID
  );