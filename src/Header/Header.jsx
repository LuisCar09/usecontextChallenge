import { Link } from "react-router-dom"
import { useTheme } from "../themes/ThemeContext"

const Header = ()=> {
    const {themeColor} = useTheme()
    console.log(themeColor);
    
    return(
        <header className={themeColor ? 'light' : 'dark'}>
            <nav>
                <Link to={'/'} >Home</Link>
                <Link to={'/MyJob'}>My Job</Link>
                <Link to={'/profile'} >Profile</Link>
            </nav>
        </header>
    )
}

export default Header