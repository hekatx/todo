import { MouseEvent } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  color?: string;
}

export function Button({
  children,
  type,
  onClick,
  color,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type || "button"}
      className={`${styles.button} ${color && styles[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
