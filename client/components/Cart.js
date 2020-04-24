import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import { getCart, removeFromCart, purchaseCart, getGuestCart, removeFromGuestCart, purchaseGuestCart } from '../store'

class Cart extends Base {
    constructor() {
        super()
        this.removeAlbum = this.removeAlbum.bind(this)
        this.purchase = this.purchase.bind(this)
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this)
    }

    componentDidMount() {
        const { getCart, getGuestCart, user } = this.props
        user.id ? getCart() : getGuestCart()
    }

    removeAlbum(orderId, albumId) {
        const {user, removeFromCart, removeFromGuestCart } = this.props
        user.id ? removeFromCart(orderId, albumId) : removeFromGuestCart(albumId)
    }

    purchase(orderId) {
        const { user, purchaseCart, purchaseGuestCart, history } = this.props
        user.id ? purchaseCart(orderId, history) : purchaseGuestCart(history)
    }

    calculateTotalPrice() {
        const { cart } = this.props
        if (cart.id) {
            return cart.albums.reduce((start, album) => {
                return start + (album.price * album.cart.quantity)
            }, 0)
        }
    }

    render() {
        const { cart } = this.props
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
                                <div onClick={() => this.removeAlbum(cart.id, album.id)}>Remove From Cart</div>
                            </div>)}
                    </div>
                    <div className="cart-checkout">
                        <div>Total Price: {this.formatPrice(this.calculateTotalPrice())}</div>
                        <div onClick={() => this.purchase(cart.id)}>Purchase</div>
                    </div>
                </Fragment>
                    : <div>Cart is Empty</div>)}
            </div>
        )
    }
}

const mapState = (state) => ({
    cart: state.cart,
    user: state.user
})

const mapDispatch = (dispatch) => ({
    getCart: () => dispatch(getCart()),
    getGuestCart: () => dispatch(getGuestCart()),
    removeFromCart: (orderId, albumId) => dispatch(removeFromCart(orderId, albumId)),
    purchaseCart: (orderId, history) => dispatch(purchaseCart(orderId, history)),
    removeFromGuestCart: (albumId) => dispatch(removeFromGuestCart(albumId)),
    purchaseGuestCart: (history) => dispatch(purchaseGuestCart(history))
})

export default connect(mapState, mapDispatch)(Cart)