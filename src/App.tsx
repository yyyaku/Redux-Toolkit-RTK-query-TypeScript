import React from "react";
import "./App.css";
import { userSlice } from "./store/reducers/UserSlice";
import { useAppDispatch, useTypedSelector } from "./hooks/redux";

function App() {
    // вытаскиваем ActionCreatorы из слайса с помощью actions
    const { increment } = userSlice.actions;
    const dispatch = useAppDispatch();
    const { count } = useTypedSelector((state) => state.userReducer);
    return (
        <div className='App'>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(10))}>incrtment</button>
        </div>
    );
}

export default App;
