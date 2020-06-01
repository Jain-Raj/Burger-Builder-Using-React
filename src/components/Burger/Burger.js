import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger = (props) => {
    let keys = []
    Object.keys(props.ingredients).forEach(key => { 
        for(let i = 0; i<props.ingredients[key]; i++)
            keys.push(key) 
    })

    let dynamicIngredients = keys.map((key, index) => {return <BurgerIngredients typeIngredient={key} key={key + index}></BurgerIngredients>})

    return (
        <div className={classes.Burger}>
            <BurgerIngredients typeIngredient='burger-top'></BurgerIngredients>
            {dynamicIngredients}
            <BurgerIngredients typeIngredient='bread-bottom'></BurgerIngredients>
        </div>
    )
}

export default burger