import { axios } from "@/lib/axios";
import { Todo } from "@/types";

export function getUserTodos(): Promise<Todo[]> {
  return axios.get(`/todos`);
}

export function postTodo(id: number, todo: Todo) {
  return axios.post(`/todos/${id}`, todo);
}
