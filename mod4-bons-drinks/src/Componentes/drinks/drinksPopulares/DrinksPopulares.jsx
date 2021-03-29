import React, {useState, useEffect} from 'react';
import Modal from '../modal/Modal';
import CardPopulares from './cardPopulares/CardPopulares';
import styles from './DrinksPopulares.module.css';



function DrinksPopulares() {
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false)
  
    useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then((response) => {
          return response.json();
        })
        .then((dados) => {
          dados = dados.drinks.slice(1,10);
          setDrinks(dados);
        });
    }, []);

    function hendleModal(event){
        event.preventDefault()
        setModal(true)

    }
  
    return (
      <div className={styles.secaoDrinks}>
          {modal && <Modal/>}
        {drinks.map((drink, index) => {
          return (
              <CardPopulares
              src={drink.strDrinkThumb}
              id={drink.strDrink}
              key={index}
              onClick={hendleModal}
              />


          );
        })}
      </div>
    );
  }

export default DrinksPopulares
