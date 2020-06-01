import classes from './BuildControls.module.css'
import React from 'react'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {props.ingredientLabels.map(label => (
            <BuildControl
                labelIngredient={label}
                key={label} 
                updateIngredient = {props.updateIngredients}>
            </BuildControl>))}
    </div>
)

export default buildControls