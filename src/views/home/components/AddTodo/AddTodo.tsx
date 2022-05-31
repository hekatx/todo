import { Button } from "@/components/Button";
import { TextArea } from "@/components/TextArea";
import { ChangeEvent, useState } from "react";
import styles from "./AddTodo.module.scss";

export function AddTodo(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  return (
    <div className={styles.container}>
      <TextArea
        placeholder="Añadir nueva tarea"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setTitle(e.target.value);
        }}
      />
      {title.length ? (
        <>
          <TextArea placeholder="Descripción de la tarea" />
          <Button>Añadir</Button>
        </>
      ) : null}
    </div>
  );
}
