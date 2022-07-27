import Switch from "components/Switch/Switch";
import React, { useState } from "react";

type CompounTypes  = {on: boolean, children: JSX.Element }

const lessonName = "Compound Components";


const On = ({ on, children }: any) => (on ? children : null);
const Off = ({ on, children }: any) => (on ? null : children);
const Button = (props: any) => <Switch on={props.on} onClick={props.onClick} lesson={lessonName}/>;

const Toggler = ({ children }: { children: any }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

  return React.Children.map(children, (childElem) =>
    React.cloneElement(childElem, { on: isOn, onClick: toggle })
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
