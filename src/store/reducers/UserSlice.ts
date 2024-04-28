import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
    count: 0,
};

// Слайсы - генерирует редьюсер и действия к нему = содержит ActionCreatorы и reducer. Создается с помощью createSlice с полями:
// 1. name - имя редюсера, 2. дефолтныое состояние, 3. reducer - внутрия поля создаем функции, которые принимают параметром state и action, внутри которых меняем состояние

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            // redux без toolkit: reducer - чистая функция, которая должна вернуть return {...state, field: action.payload} - объект, где разворачиваем старое состояние и изменяем поле
            // redux с toolkit:  можем изменить конткертное поле у состояния
            state.count += action.payload;
        },
    },
});

export default userSlice.reducer;
