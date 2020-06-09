import React, { Component } from 'react'
import CheckOutSummary from '../../components/UI/Order/CheckOutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'

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
            <div>
                <CheckOutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    burgeringredients={this.state.burgerIngredients}></CheckOutSummary>
                <Route path={this.props.match.url + '/contact-data'} component={ContactData}></Route>
            </div>
        )
    }
}

export default CheckOut