import classes from './BuildControl.module.css'
import React from 'react'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.labelIngredient.charAt(0).toUpperCase() + props.labelIngredient.slice(1)}</div>
        <button className={classes.Less} onClick={() => props.updateIngredient(props.labelIngredient, 'sub')} disabled={props.disabledInfo}>Less</button>
        <button className={classes.More} onClick={() => props.updateIngredient(props.labelIngredient, 'add')}>More</button>
    </div>
)

export default buildControl