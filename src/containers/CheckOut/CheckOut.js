import React, { Component } from 'react'
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

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search)

        const ingredients = {}
        for (let param of query.entries()) 
            ingredients[param[0]] = +param[1]

        this.setState({ burgerIngredients: ingredients })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <CheckOutSummary
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                burgeringredients={this.state.burgerIngredients}></CheckOutSummary>
        )
    }
}

export default CheckOut