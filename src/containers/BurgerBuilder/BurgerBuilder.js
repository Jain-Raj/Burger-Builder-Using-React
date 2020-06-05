import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'

const INGREDIENTS_PRICE = {
    salad: 0.3,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.2
}

class BurgerBuilder extends Component {
    state = {
        burgerIngredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        burgerPrice: 4,
        purchasing: false
    }

    closemodalHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseContinueHandler = () => {
        const orderInfo = {
            ingredients: this.state.burgerIngredients,
            burgerPrice: this.state.burgerPrice,
            customerInfo:{
                name: 'RJ',
                address:{
                    street: 'Test Street',
                    zipCode: '530020',
                    country: 'India'
                },
                email:'test@test.com'

            },
            deliveryMEthod:'fastest'
        }
        axios.post('/orders.json', orderInfo)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log('RJ')
            console.log(error)
        })
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
        return (
            <Auxiliary>
                {this.state.purchasing ?
                    <Modal modalClosed={this.closemodalHandler}>
                        <OrderSummary
                            ingredients={this.state.burgerIngredients}
                            purchaseCancel={this.closemodalHandler}
                            purchaseContinue={this.purchaseContinueHandler} 
                            burgerPrice={this.state.burgerPrice}/>
                    </Modal> : null
                }
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
}

export default BurgerBuilder