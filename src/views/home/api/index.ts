import { axios } from "@/lib/axios";
import { Todo } from "@/types";

export function getUserTodos(id: number): Promise<Todo[]> {
  return axios.get(`/todos/${id}`);
}
