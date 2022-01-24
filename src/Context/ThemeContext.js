import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props =>{

    const [theme, setTheme] = useState(true)
    const toggleTheme = () =>{
        setTheme(!theme)
    }
   
    return(
        <ThemeContext.Provider value={{toggleTheme,theme}} >
        
            {props.children}

        </ThemeContext.Provider>
    )

}
export default ThemeContextProvider


