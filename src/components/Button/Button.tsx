import { MouseEvent } from "react";
import style from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export function Button({ children, type, onClick }: Props): JSX.Element {
  return (
    <button type={type || "button"} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
