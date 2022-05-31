import { Todo } from "@/types";
import { TodoTask } from "../TodoTask";

interface Props {
  todos: Todo[];
}

export function TodoList({ todos }: Props): JSX.Element {
  return (
    <ul aria-label="Todo list">
      {todos.map((todo, i) => (
        <TodoTask key={i + todo.title} todo={todo} />
      ))}
    </ul>
  );
}
