import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import { withRouter } from 'react-router-dom'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()

        this.setState({ loading: true })

        let price = +this.props.price
        const orderInfo = {
            ingredients: this.props.ingredients,
            burgerPrice: price.toFixed(2),
            customerInfo: {
                name: 'RJ',
                address: {
                    street: 'Test Street',
                    zipCode: '530020',
                    country: 'India'
                },
                email: 'test@test.com'

            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', orderInfo)
            .then((response) => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch((error) => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your name"></Input>
                <Input inputtype="input" type="email" name="email" placeholder="Your email"></Input>
                <Input inputtype="input" type="text" name="street" placeholder="Street"></Input>
                <Input inputtype="input" type="text" name="postal" placeholder="Postal Code"></Input>
                <Button btnType="Success" clicked={this.orderHandler}> ORDER</Button>
            </form>
        )

        if (this.state.loading) {
            form = <Spinner></Spinner>
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData)