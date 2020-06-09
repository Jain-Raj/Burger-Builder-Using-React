import React, {Component} from 'react'
import CheckOutSummary from '../../components/UI/Order/CheckOutSummary'

class CheckOut extends Component {
    state = {
        burgerIngredients: {
            meat: 1,
            salad: 1,
            cheese: 1,
            bacon: 1
        }
    }

    render() {
        return(
            <CheckOutSummary burgeringredients = {this.state.burgerIngredients}></CheckOutSummary>
        )
    }
}

export default CheckOut