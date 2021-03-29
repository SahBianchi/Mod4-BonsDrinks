import React from 'react';
import styles from './FieldSet.module.css'

function FieldSet(props) {
    return (
        <fieldset className={styles.fieldset}>
            <label htmlFor={props.id} className={styles.label}>{props.children}</label>
            <input type={props.type}
            id={props.id}
            name={props.name}
            className={props.type === "textarea" ? styles.textarea : styles.input}/>
        </fieldset>
    )
}

export default FieldSet
