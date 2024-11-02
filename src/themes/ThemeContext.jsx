
import { createContext,useContext,useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [themeColor,setThemeColor] = useState(true)
    const ChangeThemeColor = () => {
        setThemeColor(!themeColor)
    }
    return(
        <ThemeContext.Provider value={{themeColor,ChangeThemeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}

//Creamos el hook
export const useTheme = () => useContext(ThemeContext)