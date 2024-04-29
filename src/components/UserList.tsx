import React, { useEffect } from "react";
import { useAppDispatch, useTypedSelector } from "../hooks/redux";
import { fetchUser } from "../store/reducers/ActionCreators";

const UserList = () => {
    const { isLoading, error, users } = useTypedSelector(
        (state) => state.userReducer
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <h3>
                            {user.email} - {user.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
