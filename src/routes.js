
import Cabecera from "components/cabecera/cabecera";
import Container from "components/container";
import PieDePagina from "components/PieDePagina/pieDePagina";
import FavoritosProvider from "contexto/favoritos";
import Favoritos from "pages/favoritos";
import Inicio from "pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function AppRoutes (){

    return(

        <BrowserRouter>
            <Cabecera/>            
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio/>}></Route>
                        <Route path="/favoritos" element={<Favoritos/>} />
                    </Routes>
                </FavoritosProvider>                
            </Container>            
            <PieDePagina/>
        </BrowserRouter>
    )
}

export default AppRoutes