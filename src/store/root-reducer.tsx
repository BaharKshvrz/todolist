import {combineReducers} from 'redux';
import { todosSlice } from './todo/todo.slice';

export const rootReducer = combineReducers({
    todos: todosSlice.reducer,
});