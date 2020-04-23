import React from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import { getCart, removeFromCart } from '../store'

class Cart extends Base {
    constructor() {
        super()
        this.removeAlbumFromCart = this.removeAlbumFromCart.bind(this)
    }

    componentDidMount() {
        const { getCart } = this.props
        getCart()
    }

    removeAlbumFromCart(orderId, albumId) {
        const { removeFromCart } = this.props
        removeFromCart(orderId, albumId)
    }

    render() {
        const { cart } = this.props
        return (
            <div className="cart">
                {cart.id && (cart.albums.length ? cart.albums.map(album => 
                    <div className="albums-container" key={album.id}>
                        <div><img className="albums-image" src={album.image} /></div>
                        <div>{album.title}</div>
                        <div>{album.artist}</div>
                        <div>{this.formatPrice(album.price)}</div>
                        <div>Quantity: {album.cart.quantity}</div>
                        <div onClick={() => this.removeAlbumFromCart(cart.id, album.id)}>Remove From Cart</div>
                    </div>) : <div>Cart is Empty</div>)}
            </div>
        )
    }
}

const mapState = (state) => ({
    cart: state.cart
})

const mapDispatch = (dispatch) => ({
    getCart: () => dispatch(getCart()),
    removeFromCart: (orderId, albumId) => dispatch(removeFromCart(orderId, albumId))
})

export default connect(mapState, mapDispatch)(Cart)