import { BaseLayout } from "@/components/BaseLayout";
import withAuth from "@/components/withAuth";
import { UserContext } from "@/providers/user";
import { useContext, useEffect } from "react";
import useTodos from "../../hooks/useTodos";
import { AddTodo } from "../AddTodo";
import { TodoList } from "../TodoList";
import styles from "./Home.module.scss";

interface TodoMessageProps {
  numberOfTodos: number;
}

function TodoMessage({ numberOfTodos }: TodoMessageProps): JSX.Element {
  if (numberOfTodos > 0) {
    return (
      <p>Tienes {numberOfTodos} tareas que vencerán en los siguientes días</p>
    );
  }

  return <p>No hay tareas para los próximos días</p>;
}

export const Home = withAuth(function (): JSX.Element {
  const { user } = useContext(UserContext);
  const { todos, setTodos } = useTodos(user.id);

  return (
    <BaseLayout>
      <div className={styles.container}>
        <div className={styles.text__container}>
          <h1>Bienvenido, {user.name}!</h1>
          <TodoMessage numberOfTodos={todos.length} />
        </div>
        <AddTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </BaseLayout>
  );
});
