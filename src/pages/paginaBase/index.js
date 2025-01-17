import Cabecera from "components/cabecera/cabecera"
import Container from "components/container"
import PieDePagina from "components/PieDePagina/pieDePagina"
import FavoritosProvider from "contexto/favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <PieDePagina/>
        </main>
    )
}

export default PaginaBase