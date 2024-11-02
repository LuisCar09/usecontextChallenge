import Button from "../components/Button"
import { useTheme } from "../themes/ThemeContext"
const Profile = () => {
    const {themeColor} = useTheme()
    return(
        <section className={`App  ${themeColor ? "light" : "dark"}`}>
            <h1>Welcome to my Profile!</h1>
            <Button />
        </section>
    )
}

export default Profile