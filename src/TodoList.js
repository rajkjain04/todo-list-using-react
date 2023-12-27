import { TodoItem } from "./TodoItem";

export function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
}
