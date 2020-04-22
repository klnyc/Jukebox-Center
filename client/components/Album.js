import React from 'react'
import { connect } from 'react-redux'
import { getAlbum, addToCart } from '../store'
import Base from './Base'

class Album extends Base {
    constructor() {
        super()
        this.addAlbumToCart = this.addAlbumToCart.bind(this)
    }

    componentDidMount() {
        const { genre, id } = this.props.match.params
        const { getAlbum } = this.props
        getAlbum(genre, id)
    }

    addAlbumToCart(id, quantity, price) {
        const { addToCart } = this.props
        addToCart(id, quantity, price)
    }

    render() {
        const { album } = this.props
        return (
            <div className="album">
                <img className="album-image" src={album.image} />
                <div className="album-info">
                    <div>{album.title}</div>
                    <div>{album.artist}</div>
                    <div>{album.genre}</div>
                    <div>{album.year}</div>
                    {album.inventory
                    ? <div className="stock-in">Stock: {album.inventory}</div> 
                    : <div className="stock-out">"Out of stock!"</div>}
                    {album.price && <div>{this.formatPrice(album.price)}</div>}
                    <div onClick={() => this.addAlbumToCart(album.id, 2, 2000)}>Add To Cart</div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    album: state.album
})

const mapDispatch = (dispatch) => ({
    getAlbum: (genre, id) => dispatch(getAlbum(genre, id)),
    addToCart: (id, quantity, price) => dispatch(addToCart(id, quantity, price))
})

export default connect(mapState, mapDispatch)(Album)