import Switch from "components/Switch/Switch";
import React, { useState } from "react";

type CompounTypes = { on: boolean; children: JSX.Element };

const lessonName = "Render Props";

const Toggler = ({ children }: { children: any }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

  return children({ on: isOn, onClick: toggle });
};

const Usage = () => {
  return (
    <Toggler>
      {({ on, onClick }) => (
        <div>
          {on ? "This button is on" : "The button is off"}
          <Switch on={on} onClick={onClick} lesson={lessonName} />
          <hr />
          <button onClick={onClick}>{on ? "on" : "off"}</button>
        </div>
      )}
    </Toggler>
  );
};

export default Usage;
