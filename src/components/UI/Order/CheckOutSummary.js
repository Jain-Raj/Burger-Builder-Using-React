import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../Button/Button'
import classes from './CheckOutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckOutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{  margin: 'auto' }}>
                <Burger ingredients={props.burgeringredients}></Burger>
            </div>
            <Button btnType="Danger">CANCEL</Button>
            <Button btnType="Success">CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary