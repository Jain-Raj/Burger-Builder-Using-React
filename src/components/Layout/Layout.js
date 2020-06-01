import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'

const layout = (props) => (
    <Auxiliary>
        <div>Tool bar, Back Drop, Side Drawer</div>
        <main>{props.children}</main>
    </Auxiliary>
)

export default layout 