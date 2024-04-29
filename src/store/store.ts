import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import todoReducer from "./reducers/TodoSlice";
import { postApi } from "../service/PostService";

const rootReducer = combineReducers({
    userReducer,
    todoReducer,
    [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState["dispatch"];
