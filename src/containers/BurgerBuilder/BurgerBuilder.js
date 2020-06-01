import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        burgerIngredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    updateBurgerIngredients = (ingredientType, operationType) => {
        const updatedIngredients = {...this.state.burgerIngredients}
        if(operationType === "add")
            updatedIngredients[ingredientType] += 1
        else
            updatedIngredients[ingredientType] -= 1
        this.setState({burgerIngredients: updatedIngredients})
    }

    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.burgerIngredients}></Burger>
                <BuildControls
                    ingredientLabels={Object.keys(this.state.burgerIngredients)}
                    updateIngredients={this.updateBurgerIngredients}>
                </BuildControls>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder