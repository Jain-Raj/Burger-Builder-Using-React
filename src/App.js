import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/checkout" component={CheckOut}></Route>
        <Route path="/" exact component={BurgerBuilder}></Route>
      </Layout>
    )
  }
}

export default App