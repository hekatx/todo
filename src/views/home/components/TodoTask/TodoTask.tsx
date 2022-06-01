import { Todo } from "@/types";
import styles from "./TodoTask.module.scss";
import { Checkbox } from "@/components/Checkbox";
import useTodos from "../../hooks/useTodos";
import { ChangeEvent, useContext, useState } from "react";
import { UserContext } from "@/providers/user";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";

interface Props {
  todo: Todo;
}

export function TodoTask({ todo, del, edit }: any): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  const { user } = useContext(UserContext);

  return (
    <li className={styles.container}>
      <Checkbox
        checked={false}
        onChangeHandler={(_) => {
          del(todo.id);
        }}
      />
      <div className={styles.content__container}>
        {isEditing ? (
          <>
            <TextArea
              placeholder=""
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setTitle(e.currentTarget.value)
              }
              value={title}
            />
            <TextArea
              placeholder=""
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.currentTarget.value)
              }
              value={content}
            />
            <Button
              onClick={() => {
                edit(user.id, { ...todo, title, content });
                setIsEditing(false);
              }}
            >
              Edit
            </Button>
          </>
        ) : (
          <>
            <h1 className={styles.title} onClick={() => setIsEditing(true)}>
              {title}
            </h1>
            <p className={styles.content} onClick={() => setIsEditing(true)}>
              {content}
            </p>
          </>
        )}
      </div>
    </li>
  );
}
