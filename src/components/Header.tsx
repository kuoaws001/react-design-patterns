import React, { useContext } from 'react'
import { ThemeProvider, ThemeContext, IThemeContext } from '../context/ThemeProvider'

const Header = () => {
    return (
        <ThemeProvider>
            <TopNav />
        </ThemeProvider>
    )
}

const TopNav = () => {
    const { theme, setTheme } = useContext(ThemeContext) as IThemeContext;

    const toggleMode = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className='header' style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <button onClick={toggleMode}>toggle</button>
        </div>
    )
}

export default Header