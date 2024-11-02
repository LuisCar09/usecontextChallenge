import { useTheme } from "../themes/ThemeContext"
const Button = () => {
    const {themeColor,ChangeThemeColor} = useTheme()
    
    return(
        <>
            <button onClick={() => ChangeThemeColor()}>Change Color</button>
        </>
    )
}

export default Button