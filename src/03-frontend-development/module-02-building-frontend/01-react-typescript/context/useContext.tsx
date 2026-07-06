import React from 'react'
import { useTheme } from './ThemeContext.js';


const useContext = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <h1>current theme: {theme}</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"}Mode;
            </button>
        </div>
    )
}


export default useContext