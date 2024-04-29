import { todoSlice } from "../reducers/TodoSlice";
import axios from "axios";
import { AppDispatch } from "../store";

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
}

export const fetchTodo = (page = 1, limit = 10) => {
    return async function (dispatch: AppDispatch) {
        try {
            dispatch(todoSlice.actions.todosFetching());
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/",
                { params: { _page: page, _limit: limit } }
            );
            setTimeout(() => {
                dispatch(todoSlice.actions.todosFetchingSucces(response.data));
            }, 1000);
        } catch (error) {
            dispatch(
                todoSlice.actions.todosFetchingError(getErrorMessage(error))
            );
        }
    };
};

export const setPageTodo = (page: number) => {
    return todoSlice.actions.todosSetPage(page);
};
