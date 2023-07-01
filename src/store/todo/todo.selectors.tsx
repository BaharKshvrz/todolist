import store from "../store";

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.lists ? Object.values(state.todos.lists) : null;