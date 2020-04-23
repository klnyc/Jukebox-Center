import React from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import { getCart } from '../store'

class Cart extends Base {
    componentDidMount() {
        const { getCart } = this.props
        getCart()
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
                    </div>) : <div>Cart is Empty</div>)}
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