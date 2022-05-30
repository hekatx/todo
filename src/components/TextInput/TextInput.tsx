import { ChangeEvent } from "react";
import styles from "./TextInput.module.scss";

interface Props {
  type: string | undefined;
  name: string;
  label: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
  label,
  type,
  name,
  value,
  onChange,
}: Props): JSX.Element {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <input
        className={styles.input}
        type={type || "text"}
        name={name}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
