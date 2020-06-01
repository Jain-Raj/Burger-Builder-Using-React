import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger = () => {
    return (
        <div className={classes.Burger}> 
            <BurgerIngredients typeIngredient ='burger-top'></BurgerIngredients>
            <BurgerIngredients typeIngredient ='salad'></BurgerIngredients>
            <BurgerIngredients typeIngredient ='bacon'></BurgerIngredients>
            <BurgerIngredients typeIngredient ='cheese'></BurgerIngredients>
            <BurgerIngredients typeIngredient ='meat'></BurgerIngredients>
            <BurgerIngredients typeIngredient ='bread-bottom'></BurgerIngredients>
        </div>
    )
}

export default burger