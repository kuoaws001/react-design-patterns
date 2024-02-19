import React, { useContext } from "react";
import { ToggleProvider, ToggleContext, IToggleContext } from "../context/ToggleProvider";

interface ButtonProps {
    text: string;
    click: any;
}

const Button = ({ text, click }: ButtonProps) => {
    return (
        <div className="btn" onClick={click}>
            <span>{text}</span>
        </div>
    )
}

const Toggle = ToggleProvider as any;

Toggle.On = ({ children }) => {
    const { on } = useContext(ToggleContext) as IToggleContext;
    return on ? children : null
}

Toggle.Off = ({ children }) => {
    const { on } = useContext(ToggleContext) as IToggleContext;
    return on ? null : children
}

Toggle.Button = (props: any) => {
    const { toggle } = useContext(ToggleContext) as IToggleContext;
    return <Button click={toggle} {...props} />
}

export default Toggle