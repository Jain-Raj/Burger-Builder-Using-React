import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorhandler'

const INGREDIENTS_PRICE = {
    salad: 0.3,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.2
}

class BurgerBuilder extends Component {
    state = {
        burgerIngredients: null,
        burgerPrice: 4,
        purchasing: false,
        loading: false,
        error: null
    }

    componentDidMount() {
        axios.get('https://burger-builder-37337.firebaseio.com/burgerIngredients.json')
            .then(response => {
                this.setState({ burgerIngredients: response.data })
            })
            .catch(error => {
                this.setState({error: error.message})
            })
    }

    closemodalHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
        // this.setState({ loading: true })

        // const orderInfo = {
        //     ingredients: this.state.burgerIngredients,
        //     burgerPrice: this.state.burgerPrice,
        //     customerInfo: {
        //         name: 'RJ',
        //         address: {
        //             street: 'Test Street',
        //             zipCode: '530020',
        //             country: 'India'
        //         },
        //         email: 'test@test.com'

        //     },
        //     deliveryMEthod: 'fastest'
        // }
        // axios.post('/orders.json', orderInfo)
        //     .then((response) => {
        //         this.setState({ loading: false, purchasing: false })
        //     })
        //     .catch((error) => {
        //         this.setState({ loading: false, purchasing: false })
        //     })
    }

    updateBurgerIngredients = (ingredientType, operationType) => {
        const updatedIngredients = { ...this.state.burgerIngredients }
        let oldPrice = this.state.burgerPrice

        if (operationType === "add") {
            updatedIngredients[ingredientType] += 1
            this.setState({ burgerPrice: oldPrice + INGREDIENTS_PRICE[ingredientType] })
        }
        else {
            updatedIngredients[ingredientType] -= 1
            this.setState({ burgerPrice: oldPrice - INGREDIENTS_PRICE[ingredientType] })
        }

        this.setState({ burgerIngredients: updatedIngredients })
    }

    render() {
        let orderSummary = <OrderSummary
            ingredients={this.state.burgerIngredients}
            purchaseCancel={this.closemodalHandler}
            purchaseContinue={this.purchaseContinueHandler}
            burgerPrice={this.state.burgerPrice} />

        if (this.state.loading)
            orderSummary = <Spinner />

        let burger = this.state.error ? <p>Cannot load Burger</p>: <Spinner />
        if (this.state.burgerIngredients) {
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.state.burgerIngredients}></Burger>
                    <BuildControls
                        ingredients={this.state.burgerIngredients}
                        updateIngredients={this.updateBurgerIngredients}
                        priceofBurger={this.state.burgerPrice}
                        click={this.purchaseHandler}>
                    </BuildControls>
                </Auxiliary>
            )
        }

        return (
            <Auxiliary>
                {this.state.purchasing ?
                    <Modal modalClosed={this.closemodalHandler}>
                        {orderSummary}
                    </Modal> : null
                }
                {burger}
            </Auxiliary>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios)