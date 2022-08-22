import Switch from "components/Switch/Switch";
import React, { useState } from "react";

type CompounTypes = { on: boolean; children: JSX.Element };

const lessonName = "Prop collections";

const Toggler = ({ children }: { children: any }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

   const getStateAndHellpers = () => ({ on: isOn, toggle: toggle, togglerProps: {
    onClick: toggle,
    'aria-pressed': isOn
  } })
  
  return children(getStateAndHellpers());
};

const Usage = () => {
  return (
    <Toggler>
      {({ on, togglerProps }) => (
        <div>
          {on ? "This button is on" : "The button is off"}
          <Switch on={on} {...togglerProps} lesson={lessonName} />
          <hr />
          <button {...togglerProps} onClick={() => alert("Small button has been pressed")}>{on ? "on" : "off"}</button>
          <Switch on={on} {...togglerProps} lesson={lessonName} />

        </div>
      )}
    </Toggler>
  );
};

export default Usage;
