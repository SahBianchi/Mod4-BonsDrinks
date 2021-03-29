import { Link, Switch, Route } from 'react-router-dom';
import React from 'react'
import styles from './Drinks.module.css';
import DrinksPopulares from './drinksPopulares/DrinksPopulares';


function Drinks() {
    return (
        <div className={styles.containerDrinks}>
            <h2 className={styles.tituloDrinks}>Drinks</h2>
            <section className={styles.secaoDrinks}>
                    <button className={styles.btnDrinksPopulares}>
                        <Link to="/drinks/drinksPopulares" className={styles.textoBtn}>Drinks Populares</Link>
                    </button>
            </section>

            <div>
                <Switch>
                    
                <Route path="/drinks/drinksPopulares">
                        <DrinksPopulares/>
                    </Route>

                </Switch>
            </div>
        </div>
    )
}

export default Drinks
