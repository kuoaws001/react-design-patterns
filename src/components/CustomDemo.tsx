import React, { useEffect, useRef } from 'react'
import { CustomButton, CustomInput } from './Custom'


const CustomDemo = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.value = 'orange'
        }
    }

    const handleChange = (e: any) => {
        if (inputRef.current) {
            inputRef.current.value = e.target.value;
        }
    }

    useEffect(() => {
        inputRef && inputRef.current?.focus()
        btnRef.current?.click();
    }, [])

    return (
        <div>
            <CustomInput value={inputRef.current?.value} onChange={handleChange} ref={inputRef} />
            <CustomButton ref={btnRef} onClick={handleClick}>
                <span>button</span>
            </CustomButton>
        </div>
    )
}

export default CustomDemo