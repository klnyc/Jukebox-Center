import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import { getCart, removeFromCart, purchase } from '../store'

class Cart extends Base {
    componentDidMount() {
        const { getCart } = this.props
        getCart()
    }

    render() {
        const { cart, purchase, history, removeFromCart } = this.props
        return (
            <div className="cart">
                {cart.id && (cart.albums.length ? 
                <Fragment>
                    <div className="cart-list">
                        {cart.albums.map(album => 
                            <div className="albums-container" key={album.id}>
                                <div><img className="albums-image" src={album.image} /></div>
                                <div>{album.title}</div>
                                <div>{album.artist}</div>
                                <div>{this.formatPrice(album.price)}</div>
                                <div>Quantity: {album.cart.quantity}</div>
                                <div onClick={() => removeFromCart(cart.id, album.id)}>Remove From Cart</div>
                            </div>)}
                    </div>
                    <div className="cart-checkout">
                        <div>Total Price: </div>
                        <div onClick={() => purchase(cart.id, history)}>Purchase</div>
                    </div>
                </Fragment>
                    : <div>Cart is Empty</div>)}
            </div>
        )
    }
}

const mapState = (state) => ({
    cart: state.cart
})

const mapDispatch = (dispatch) => ({
    getCart: () => dispatch(getCart()),
    removeFromCart: (orderId, albumId) => dispatch(removeFromCart(orderId, albumId)),
    purchase: (orderId, history) => dispatch(purchase(orderId, history))
})

export default connect(mapState, mapDispatch)(Cart)