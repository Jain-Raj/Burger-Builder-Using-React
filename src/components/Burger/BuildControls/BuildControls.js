import classes from './BuildControls.module.css'
import React from 'react'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Pricing: <strong>{'$ ' + props.priceofBurger.toFixed(2)}</strong></p>
        {Object.keys(props.ingredients).map(label => (
            <BuildControl
                labelIngredient={label}
                key={label}
                updateIngredient={props.updateIngredients}
                disabledInfo={props.ingredients[label] <= 0}>
            </BuildControl>))}
        <button 
            className={classes.OrderButton} 
            disabled={Object.values(props.ingredients).reduce((a, b) => a + b) === 0}
            onClick={props.click}>ORDER NOW</button>
    </div>
)

export default buildControls