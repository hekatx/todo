import { Button } from "@/components/Button";
import { TextArea } from "@/components/TextArea";
import { axios } from "@/lib/axios";
import { Todo } from "@/types";
import { AxiosResponse } from "axios";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styles from "./AddTodo.module.scss";

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export function AddTodo({ setTodos, todos }: Props): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handler =
    (fn: Dispatch<SetStateAction<any>>) =>
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      fn(e.currentTarget.value);
    };

  const onChangeTitleHandler = handler(setTitle);
  const onChangeContentHandler = handler(setContent);

  function onAddHandler() {
    axios
      .post("/todos", {
        title,
        content,
        userId: 1,
      })
      .then((d: any) => {
        setTodos((prev) => [...prev, d]);
        setContent("");
        setTitle("");
      });
  }

  return (
    <div className={styles.container}>
      <TextArea
        placeholder="Añadir nueva tarea"
        onChange={onChangeTitleHandler}
        value={title}
      />
      {title.length ? (
        <>
          <TextArea
            placeholder="Descripción de la tarea"
            value={content}
            onChange={onChangeContentHandler}
          />
          <Button onClick={onAddHandler}>Añadir</Button>
        </>
      ) : null}
    </div>
  );
}
