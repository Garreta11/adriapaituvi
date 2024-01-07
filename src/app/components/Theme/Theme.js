'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {

    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    })

    return (
        <ThemeContext.Provider value={{ mouse, setMouse }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);