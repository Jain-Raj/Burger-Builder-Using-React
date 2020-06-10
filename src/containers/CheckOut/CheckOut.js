import React, { Component } from 'react'
import CheckOutSummary from '../../components/UI/Order/CheckOutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'

class CheckOut extends Component {
    state = {
        burgerIngredients: null,
        totaPrice: null
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search)

        const ingredients = {}
        let price = null
        for (let param of query.entries()) {
            if (param[0] === "price") {
                price = param[1]
            }
            else {
                ingredients[param[0]] = +param[1]
            }
        }

        this.setState({ burgerIngredients: ingredients, totaPrice: price })
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
                <Route
                    path={this.props.match.url + '/contact-data'}
                    render={() => (<ContactData ingredients={this.state.burgerIngredients} price={this.state.totaPrice}></ContactData>)}></Route>
            </div>
        )
    }
}

export default CheckOut