import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        alert('You Continue')
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
                            purchaseContinue={this.purchaseContinueHandler} />
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