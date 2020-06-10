import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Auxiliary from '../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        closeModal = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Auxiliary>
                    {this.state.error ?
                        <Modal modalClosed={this.closeModal}>
                            {this.state.error.message}
                        </Modal> : null
                    }
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler