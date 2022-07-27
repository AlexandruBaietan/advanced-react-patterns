import Switch from "components/Switch/Switch";
import React, { useState } from "react";

const lessonName = "Flexible Compound Components";

const ToggleContext = React.createContext({ on: false, onClick: () => {} });

const On = ({ children }: any) => (
  <ToggleContext.Consumer>
    {(contextValue: any) => (contextValue.on ? children : null)}
  </ToggleContext.Consumer>
);
const Off = ({ children }: any) => (
  <ToggleContext.Consumer>
    {(contextValue) => (contextValue.on ? null : children)}
  </ToggleContext.Consumer>
);
const Button = () => (
  <ToggleContext.Consumer>
    {(contextValue) => (
      <Switch
        on={contextValue.on}
        onClick={contextValue.onClick}
        lesson={lessonName}
      />
    )}
  </ToggleContext.Consumer>
);

const Toggler = ({ children }: { children: any }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);
  const state = { on: isOn, onClick: toggle }
  return (
    <ToggleContext.Provider value={state}>
      {children}
    </ToggleContext.Provider>
  );
};

const Usage = () => {
  return (
    <Toggler>
      <Toggler.Button />
      <Toggler.Off> The button is Off</Toggler.Off>
      <Toggler.On> The button is On</Toggler.On>
    </Toggler>
  );
};

Toggler.On = On;
Toggler.Off = Off;
Toggler.Button = Button;

export default Usage;
