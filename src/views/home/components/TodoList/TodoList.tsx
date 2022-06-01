import { axios } from "@/lib/axios";
import { UserContext } from "@/providers/user";
import { Todo } from "@/types";
import { Dispatch, SetStateAction, useContext } from "react";
import useTodos from "../../hooks/useTodos";
import { TodoTask } from "../TodoTask";
import styles from "./TodoList.module.scss";

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export function TodoList({ todos, setTodos }: Props): JSX.Element {
  async function deleteTodo(todoId: number): Promise<void> {
    try {
      setTodos(todos.filter((todo) => todo.id != todoId));
      await axios.delete(`/todos/${todoId}`);
    } catch (err) {
      console.error(err);
    }
  }

  async function editTodo(editedTodo: Todo): Promise<void> {
    try {
      await axios.put(`/todos/${editedTodo.id}`, editedTodo);
      let todosCopy = [...todos];
      const editedTodoIndex = todosCopy.findIndex(
        (todo) => todo.id === editedTodo.id
      );
      let c = todosCopy[editedTodoIndex].content;
      todosCopy[editedTodoIndex] = { ...editedTodo, content: c + "AHAHA" };
      setTodos(todosCopy);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ul aria-label="Todo list" className={styles.list}>
      {todos.map((item, index) => (
        <TodoTask
          key={index + item.title}
          todo={item}
          del={deleteTodo}
          edit={editTodo}
        />
      ))}
    </ul>
  );
}
