import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import classes from './Layout.module.css'

const layout = (props) => (
    <Auxiliary>
        <div>Tool bar, Back Drop, Side Drawer</div>
        <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
)

export default layout 