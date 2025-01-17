import styles from "./index.module.css"
import Banner from "components/Banner";
import Card from "components/card";
import Titulo from "components/titulo";
import { useEffect, useState } from "react";


function Inicio(){

    const [videos, setVideos] = useState([])

    useEffect(() =>{
        fetch("https://my-json-server.typicode.com/Enriquei09/aluraCinea_api/videos")
        .then(response => response.json())
        .then(data =>{
            setVideos(data)
        })
    },[])

    return(
        <>
            
            <Banner img="home" color="#154580"/>
            <Titulo>
               <h1>Un lugar para guardar sus videos favoritos</h1> 
            </Titulo>
            {/* <Card id="1" titulo={"Kike"} capa="https://github.com/Enriquei09.png" /> */}
            <section className={styles.container}>
                {videos.map((video) =>{
                    return(
                        <Card {...video} key={video.id} />
                    )
                })}
            </section>
            
        </>
        
    )
}

export default Inicio;