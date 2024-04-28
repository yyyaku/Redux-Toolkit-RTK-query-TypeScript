import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
};

// Слайсы - генерирует редьюсер и действия к нему = содержит ActionCreatorы и reducer. Создается с помощью createSlice с полями:
// 1. name - имя редюсера, 2. дефолтныое состояние, 3. reducer - внутрия поля создаем функции, которые принимают параметром state и action, внутри которых меняем состояние

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },

        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
        },

        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default userSlice.reducer;
