import classes from './BuildControls.module.css'
import React from 'react'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Pricing: <strong>{'$ ' + props.priceofBurger}</strong></p>
        {Object.keys(props.ingredients).map(label => (
            <BuildControl
                labelIngredient={label}
                key={label}
                updateIngredient={props.updateIngredients}
                disabledInfo={props.ingredients[label] <= 0}>
            </BuildControl>))}
    </div>
)

export default buildControls