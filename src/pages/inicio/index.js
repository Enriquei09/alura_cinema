import styles from "./index.module.css"
import Banner from "components/Banner";
import Card from "components/card";
import Titulo from "components/titulo";
import videos from "data/db.json"

function Inicio(){

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