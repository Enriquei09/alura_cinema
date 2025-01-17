import Banner from "components/Banner"
import styles from "./favoritos.module.css"
import Titulo from "components/titulo"
import { useFavoritosContex } from "contexto/favoritos"
import Card from "components/card"

function Favoritos (){

    const {favorito} = useFavoritosContex()

    return(
        <>
            <Banner img="favoritos" color="#154580"/>
            <Titulo>
               <h1>Favoritos</h1> 
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) =>{
                    return(<Card {...fav} key={fav.id} />)
                })}
            </section>        

        </>
    )
}

export default Favoritos