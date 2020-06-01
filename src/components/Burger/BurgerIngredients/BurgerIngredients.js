import React from 'react'
import classes from './BurgerIngredients.module.css'

const burgeringredients = (props) => {
    let burgerIngredients

    switch (props.typeIngredient) {
        case ('burger-top'):
            burgerIngredients = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>

            )
            break;
        case ('bacon'):
            burgerIngredients = <div className={classes.Bacon}></div>
            break;

        case ('cheese'):
            burgerIngredients = <div className={classes.Cheese}></div>
            break;
        case ('salad'):
            burgerIngredients = <div className={classes.Salad}></div>
            break;
        case ('meat'):
            burgerIngredients = <div className={classes.Meat}></div>
            break;
        case ('bread-bottom'):
            burgerIngredients = <div className={classes.BreadBottom}></div>
            break;
        default:
            burgerIngredients = null;
    }

    return burgerIngredients
}

export default burgeringredients