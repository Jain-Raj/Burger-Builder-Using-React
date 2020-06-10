import React, { Componnet } from 'react'
import Order from '../../components/UI/Order/Order'

class Orders extends Component {
    render() {
        return (
            <div>
                <Order></Order>
                <Order></Order>
            </div>
        )
    }
}

export default Orders