import type { NextPage } from "next";
import Styles from "./Toggler.module.css";

type Props = {
  className?: string;
  on: boolean;
  onClick: () => void;
  lesson: string;
  props?: any;
};

const Switch = ({ className, on, onClick, lesson, props }: Props): JSX.Element => {
  const btnClassName = [
    className,
    Styles.toggleBtn,
    on ? Styles.toggleBtnOn : "toggle-btn-off",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <section>
      <h1>{lesson}</h1>
      <input className={Styles.toggleInput} type="checkbox" checked={on} onChange={() => {}} />
      <span className={btnClassName} {...props} onClick={onClick} />
    </section>
  );
};

export default Switch;
