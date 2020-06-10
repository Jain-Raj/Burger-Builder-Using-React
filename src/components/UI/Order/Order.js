import React from 'react'
import classes from './Order.module.css'

const order = (props) => {
    let ingredients = []
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            quantity: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            key={ig.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}>{ig.name} ({ig.quantity}) </span>
    })

    return (
        <div className={classes.Order}>
            <p><strong>Ingredients:</strong> {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    )
}

export default order