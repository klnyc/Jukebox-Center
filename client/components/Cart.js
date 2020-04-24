import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import { getCart, removeFromCart, purchase, getGuestCart, removeFromGuestCart } from '../store'

class Cart extends Base {
    constructor() {
        super()
        this.removeAlbum = this.removeAlbum.bind(this)
    }

    componentDidMount() {
        const { getCart, getGuestCart, user } = this.props
        user.id ? getCart() : getGuestCart()
    }

    removeAlbum(orderId, albumId) {
        const {user, removeFromCart, removeFromGuestCart } = this.props
        user.id ? removeFromCart(orderId, albumId) : removeFromGuestCart(albumId)
    }

    render() {
        const { cart, purchase, history } = this.props
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
    cart: state.cart,
    user: state.user
})

const mapDispatch = (dispatch) => ({
    getCart: () => dispatch(getCart()),
    getGuestCart: () => dispatch(getGuestCart()),
    removeFromCart: (orderId, albumId) => dispatch(removeFromCart(orderId, albumId)),
    purchase: (orderId, history) => dispatch(purchase(orderId, history)),
    removeFromGuestCart: (albumId) => dispatch(removeFromGuestCart(albumId))
})

export default connect(mapState, mapDispatch)(Cart)