
import React from "react";
import styles from "./styles.module.css"
import ExtractNameAndLastName from "../ReadApi";


const Pagina = ()=> {

    return(
        <div className={styles.pagina}>
            <h2>HOLA MUNDO</h2>
            <ExtractNameAndLastName />
            {/* <ApiPage /> */}
        </div>
    )
}

export default Pagina;