import React from 'react'
import styles from './CardPopulares.module.css';

function CardPopulares(props) {
    return (
        <div className={styles.cardPopulares}>
            <img src={props.src} alt="" className={styles.imgDrinksPopulares} />
            <p className={styles.textoDrinksPopulares}>{props.id}</p>
        </div>
    )
}

export default CardPopulares
