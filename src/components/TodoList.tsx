import React, { useEffect } from "react";
import { useAppDispatch, useTypedSelector } from "../hooks/redux";
import { fetchTodo, setPageTodo } from "../store/action-creators/todos";

const TodoList = () => {
    const { todos, isLoading, error, page, limit } = useTypedSelector(
        (state) => state.todoReducer
    );
    const dispatch = useAppDispatch();
    const pages = [1, 2, 3];

    useEffect(() => {
        dispatch(fetchTodo(page, limit));
    }, [page]);

    return (
        <div>
            {isLoading && <h2>Загрузка задач...</h2>}
            {error && <h2>{error}</h2>}
            <div>
                {todos.map((todo) => (
                    <div key={todo.id}>{todo.title}</div>
                ))}
            </div>
            <div>
                {pages.map((p) => (
                    <span onClick={() => setPageTodo(p)}>{p}</span>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
