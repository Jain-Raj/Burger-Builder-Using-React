import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.show)
        attachedClasses = [classes.SideDrawer, classes.Open]

    return (
        <Auxiliary>
            <div className={classes.BackDrop}>
                {props.show ? <BackDrop clicked = {props.closed}></BackDrop>:null}  
            </div>        
            
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>

                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxiliary>
    )
}

export default sideDrawer