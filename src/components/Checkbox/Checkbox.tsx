import { ChangeEvent, useState } from "react";
import "./Checkbox.scss";

interface Props {
  checked?: boolean;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({ checked, onChangeHandler }: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label>
      <input
        type="checkbox"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(e);
          setIsChecked(!isChecked);
        }}
      />
      <span
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden="true"
      />
    </label>
  );
}
