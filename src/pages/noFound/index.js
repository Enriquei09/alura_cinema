import Styles from "./noFound.module.css"

function NoFound(){
    return(
        <section className={Styles.container}>
            <h2 className={Styles.error}>400</h2>
            <p className={Styles.text_error}>Pagina No encontrada</p>
        </section>
    )
}

export default NoFound