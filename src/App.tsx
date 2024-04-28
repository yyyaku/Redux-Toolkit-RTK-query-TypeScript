import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useTypedSelector } from "./hooks/redux";
import { fetchUser } from "./store/reducers/ActionCreators";

function App() {
    // вытаскиваем ActionCreatorы из слайса с помощью actions

    const dispatch = useAppDispatch();
    const { users } = useTypedSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div className='App'>
            {/* {JSON.stringify(users, null, 2)} */}
            <div>
                {users.map((user) => (
                    <div>{user.name}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
