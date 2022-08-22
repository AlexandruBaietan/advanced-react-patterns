import Switch from "components/Switch/Switch";
import React, { useState } from "react";

type CompounTypes = { on: boolean; children: JSX.Element };

const lessonName = "Prop collections";

const Toggler = ({ children }: { children: any }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

  const getToggleProps = (props) => {
    return{
        onClick: toggle,
        'aria-pressed': isOn,
        ...props
      }
  } 
   const getStateAndHellpers = () => ({ on: isOn, toggle: toggle, getToggleProps: getToggleProps })
  
  return children(getStateAndHellpers());
};

const Usage = () => {
  return (
    <Toggler>
      {({ on, getToggleProps }) => (
        <div>
          {on ? "This button is on" : "The button is off"}
          <Switch on={on} {...getToggleProps} lesson={lessonName} />
          <hr />
          <button {...getToggleProps} onClick={() => alert("Small button has been pressed")}>{on ? "on" : "off"}</button>
          <Switch on={on} {...getToggleProps} lesson={lessonName} />

        </div>
      )}
    </Toggler>
  );
};

export default Usage;
