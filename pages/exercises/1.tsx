import Switch from "components/Switch/Switch";
import { useState } from "react";

const lessonName = "Toggle Button"

const Toggler = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

  return <Switch on={isOn} onClick={toggle} lesson={lessonName}/>;
};

export default Toggler;
