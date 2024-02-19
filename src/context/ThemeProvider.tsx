import React, { createContext, useState } from 'react'

interface IThemeContext {
    theme: string;
    setTheme: any;
}

const ThemeContext = createContext<IThemeContext | null>(null)

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const value = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext, IThemeContext }