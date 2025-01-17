import { Link } from "react-router-dom"
import sytles from "./cabecera.module.css"
import logo from "./logo-alura.png"
import CabeceraLink from "components/CabeceraLink/cabeceraLink"

function Cabecera (){
    return(
        <header className={sytles.cabecera}>
            <Link to="/">
                <section className={sytles.logoContainer}>
                    <img src={logo} alt="logo de Alura"/><span>Cinema</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    Home
                </CabeceraLink>
                <CabeceraLink url="./Favoritos">
                    Favoritos
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera