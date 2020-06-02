import React from 'react'
import classes from './Modal.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import BackDrop from '../BackDrop/BackDrop'

const modal = (props) => (
    <Auxiliary>
        <BackDrop clicked={props.modalClosed}></BackDrop>
        <div className={classes.Modal}>
            {props.children}
        </div>
    </Auxiliary>
)

export default modal