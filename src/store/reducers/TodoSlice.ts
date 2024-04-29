import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";

interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
    page: number;
    limit: number;
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: "",
    page: 1,
    limit: 10,
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        todosFetching(state) {
            state.isLoading = true;
        },
        todosFetchingSucces(state, actions) {
            state.isLoading = false;
            state.error = "";
            state.todos = actions.payload;
        },
        todosFetchingError(state, actions) {
            state.isLoading = false;
            state.error = actions.payload;
            state.todos = [];
        },
        todosSetPage(state, action) {
            state.page = action.payload;
        },
    },
});

export default todoSlice.reducer;
