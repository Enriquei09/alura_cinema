import styles from "./card.module.css"
import iconfavorito from "./iconFavorito.png"
import iconNofavorito from "./iconNoFavorito.png"
import { useFavoritosContex } from "contexto/favoritos"

function Card({id,capa,titulo}){

    const {favorito , agregarFavorito} = useFavoritosContex()
    const isFavorito = favorito.some(fav => fav.id ===  id)
    const icon = isFavorito ?  iconfavorito : iconNofavorito

    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src={icon} alt="Icono Favorito" onClick={() =>agregarFavorito({id,titulo,capa})}/>
        </div>
    )
}

export default Card