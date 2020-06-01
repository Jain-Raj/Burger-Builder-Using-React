import classes from './BuildControls.module.css'
import React from 'react'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {props.ingredientLabels.map(label => (
            <BuildControl
                labelIngredient={label}
                key={label} 
                added = {props.add}>
            </BuildControl>))}
    </div>
)

export default buildControls