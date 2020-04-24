import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getAlbum, addToCart, addToGuestCart } from '../store'
import Base from './Base'

class Album extends Base {
    constructor() {
        super()
        this.state = { quantity: 1 }
        this.buyAlbum = this.buyAlbum.bind(this)
    }

    componentDidMount() {
        const { genre, id } = this.props.match.params
        const { getAlbum } = this.props
        getAlbum(genre, id)
    }

    buyAlbum(albumId, quantity, genre) {
        const { user, addToCart, addToGuestCart } = this.props
        user.id ? addToCart(albumId, quantity) : addToGuestCart(albumId, quantity, genre)
    }

    render() {
        const { album } = this.props
        const { quantity } = this.state
        return (
            <div className="album">
                <img className="album-image" src={album.image} />
                <div className="album-info">
                    <div className="album-title">{album.title}</div>
                    <div className="album-artist">{album.artist}</div>
                    <div className="album-details">{album.genre}<span>♦</span>{album.year}<span>♦</span>{album.price && this.formatPrice(album.price)}</div>
                    {album.inventory ?
                    <Fragment>
                        <div className="stock-in">Stock: {album.inventory}</div>
                        <div>Quantity: <input className="album-quantity-input" type="number" name="quantity" value={quantity} min="1" onChange={this.handleChange} /></div>
                        <div className="album-add-button" onClick={() => this.buyAlbum(album.id, quantity, album.genre)}>Add To Cart</div>
                    </Fragment> : <div className="stock-out">"Out of stock!"</div>}
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    album: state.album,
    user: state.user
})

const mapDispatch = (dispatch) => ({
    getAlbum: (genre, albumId) => dispatch(getAlbum(genre, albumId)),
    addToCart: (albumId, quantity) => dispatch(addToCart(albumId, quantity)),
    addToGuestCart: (albumId, quantity, genre) => dispatch(addToGuestCart(albumId, quantity, genre))
})

export default connect(mapState, mapDispatch)(Album)