import axios from "axios";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
}

export const fetchUser = () => {
    return async function (dispatch: AppDispatch) {
        try {
            dispatch(userSlice.actions.usersFetching());
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            dispatch(userSlice.actions.usersFetchingSuccess(response.data));
        } catch (error) {
            dispatch(
                userSlice.actions.usersFetchingError(getErrorMessage(error))
            );
        }
    };
};
