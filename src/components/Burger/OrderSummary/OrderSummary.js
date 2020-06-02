import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const ordersummary = (props) => {

    const summaryItems = Object.keys(props.ingredients).map(key => {
        return <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {props.ingredients[key]}</li>
    })

    return (
        <Auxiliary>
            <h3>Your Order:</h3>
            <p>A delicious burger with following items</p>
            <ul>
                {summaryItems}
            </ul>
            <p>Continue to Checkout ?</p>
            <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxiliary>
    )
}

export default ordersummary