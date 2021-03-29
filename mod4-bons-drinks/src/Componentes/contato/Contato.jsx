import React, {useState} from 'react';
import styles from './Contato.module.css';
import FieldSet from './fieldSet/FieldSet';

function Contato() {
    const [nome, setNome] = useState(""); 

    return (
        <div className={styles.containerContato}>
            <h2 className={styles.tituloContato}>Contato</h2>
            <section className={styles.sectionForm}>
                <img src="img/imgForm.png" className={styles.imgContato}/>
                <form action="" className={styles.form}>
                    <FieldSet
                    type="text"
                    id="nome"
                    name="nome">Nome:</FieldSet>
                    <FieldSet
                    type="email"
                    id="email"
                    name="email">Email:</FieldSet>
                    <FieldSet
                    type="textarea"
                    id="mensagem"
                    name="mensagem">Mensagem:</FieldSet>
                    <button className={styles.botao}>Enviar</button>
                </form>
            </section>
        </div>
    )
}

export default Contato
