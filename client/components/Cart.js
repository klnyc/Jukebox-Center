import React from 'react'
import { connect } from 'react-redux'
import { getCart } from '../store'

class Cart extends React.Component {
    componentDidMount() {
        const { getCart } = this.props
        getCart()
    }

    render() {
        const { cart } = this.props
        return (
            <div className="cart">
                Cart!
                {cart.map(album => <div>{album.price}</div>)}
            </div>
        )
    }
}

const mapState = (state) => ({
    cart: state.cart
})

const mapDispatch = (dispatch) => ({
    getCart: () => dispatch(getCart())
})

export default connect(mapState, mapDispatch)(Cart)