import React, { createContext, useState } from "react";

interface IToggleContext {
    on: boolean;
    toggle: any;
}

const ToggleContext = createContext<IToggleContext | null>(null)

function ToggleProvider({ children }) {
    const [on, setOn] = useState(false)

    const toggle = () => {
        setOn(prev => !prev)
    }

    const value = {
        on,
        toggle
    }

    return (
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleProvider, ToggleContext, IToggleContext }