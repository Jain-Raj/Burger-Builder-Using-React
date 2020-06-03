import React from 'react'
import classes from './Logo.module.css'
import burgerImage from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerImage} alt="My Burger"></img>
    </div>
)

export default logo