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


// const AwesomeInput = React.forwardRef((props, ref) => {
//     return <input type="text" ref={ref} />;
// });

// const App = () => {
//     const awesomeInputRef = React.useRef(null);

//     // App mounted 的時候讓 AwesomeInput 中的 input 元素 focus
//     React.useEffect(() => {
//         console.log(awesomeInputRef.current); // <input type="text">...</input>
//         awesomeInputRef.current.focus(); // 對 AwesomeInput 中的 <input /> 進行操作
//     }, []);

//     return <AwesomeInput ref={awesomeInputRef} />;
// };