import Button from "../components/Button"
import { useTheme } from "../themes/ThemeContext"
const Home = () => {
    const {themeColor} = useTheme()
    
    
    return(
        <section className={`App  ${themeColor ? "light" : "dark"}`}>
            <h1>Bienvenidos a la Super Home!</h1>
            <Button  />
        </section>
    )
}

export default Home