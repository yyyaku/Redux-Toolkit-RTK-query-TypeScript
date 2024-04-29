import "./App.css";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
    return (
        <div className='App'>
            <UserList></UserList>
            <TodoList></TodoList>
        </div>
    );
}

export default App;
