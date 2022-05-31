import { BaseLayout } from "@/components/BaseLayout";
import withAuth from "@/components/withAuth";
import { UserContext } from "@/providers/user";
import { Todo } from "@/types";
import { useContext, useEffect, useState } from "react";
import { getUserTodos } from "../../api";
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
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);
  const { user } = useContext(UserContext);

  async function fetchTodos(id: number): Promise<void> {
    try {
      const userTodos: Todo[] = await getUserTodos(id);
      setTodos(userTodos);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchTodos(user.id);
  }, []);

  return (
    <BaseLayout>
      <div className={styles.container}>
        <h1>Bienvenido, {user.name}!</h1>
        <TodoMessage numberOfTodos={todos.length} />
        <AddTodo />
        <TodoList todos={todos} />
      </div>
    </BaseLayout>
  );
});
