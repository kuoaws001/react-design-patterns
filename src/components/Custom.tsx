import React, { forwardRef, ReactNode } from "react";

interface CustomInputProps {
    value: string | undefined;
    onChange: any;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
    return (
        <input ref={ref} type="text" onChange={props.onChange} value={props.value} />
    )
})

interface CustomButtonProps {
    children?: ReactNode;
    onClick?: any;
}
const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>((props, ref) => {
    return (
        <button ref={ref} className="btn" onClick={props.onClick}>{props.children}</button>
    )
})

export { CustomInput, CustomButton }