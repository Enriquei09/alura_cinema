import Banner from "components/Banner"
import styles from "./Player.module.css"
import Titulo from "components/titulo"
import { useParams } from "react-router-dom"
import videos from "data/db.json"
import NoFound from "pages/noFound"

function Player(){

    const parametros = useParams()
    const video  = videos.find((video) => video.id === Number(parametros.id))
    console.log(video)
    if(!video)return<NoFound/>

    return(
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe width="100%" height="100%" 
                src={video.link}
                title={video.titulo} frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                
            ></iframe>

            </section>


        </>
    )
}

export default Player

//"https://www.youtube.com/embed/hVpnpl2xWNE?si=QJBeoJ3bfP4MFop0"
//"YouTube video player"