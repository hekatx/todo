import { axios } from "@/lib/axios";
import { Todo } from "@/types";
import { useDebugValue, useEffect, useState } from "react";
import { getUserTodos } from "../api";

function useTodos(id: number) {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function fetchTodos(): Promise<void> {
    try {
      const userTodos: Todo[] = await getUserTodos();
      setTodos(userTodos);
    } catch (err) {
      console.error(err);
    }
  }

  useDebugValue(todos ?? "loading...");

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, setTodos };
}

export default useTodos;
