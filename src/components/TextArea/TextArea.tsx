import { ChangeEvent } from "react";
import styles from "./TextArea.module.scss";

interface Props {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({ placeholder, onChange }: Props): JSX.Element {
  return (
    <textarea
      placeholder={placeholder}
      className={styles.textarea}
      onChange={onChange}
    />
  );
}
