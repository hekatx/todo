import { Todo } from "@/types";

interface Props {
  todo: Todo;
}

export function TodoTask({ todo }: Props): JSX.Element {
  return (
    <li className={styles.container}>
      <Checkbox checked={todo.status} />
      <div className={styles.content__container}>
        <h1 className={styles.title}>{todo.title}</h1>
        <p className={styles.content}>{todo.content}</p>
      </div>
    </li>
  );
}
