import Button from "../components/Button"
import { useTheme } from "../themes/ThemeContext"
const MyJob = () => {
    const {themeColor} = useTheme()
    return(
        <section className={`App  ${themeColor ? "light" : "dark"}`}>
            <h1>Welcome to MyJob</h1>
            <Button />
        </section>
    )
}

export default MyJob