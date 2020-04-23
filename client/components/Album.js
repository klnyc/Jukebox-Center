import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getAlbum, addToCart } from '../store'
import Base from './Base'

class Album extends Base {
    constructor() {
        super()
        this.state = { quantity: 1 }
    }

    componentDidMount() {
        const { genre, id } = this.props.match.params
        const { getAlbum } = this.props
        getAlbum(genre, id)
    }

    render() {
        const { album, addToCart } = this.props
        const { quantity } = this.state
        return (
            <div className="album">
                <img className="album-image" src={album.image} />
                <div className="album-info">
                    <div>{album.title}</div>
                    <div>{album.artist}</div>
                    <div>{album.genre}</div>
                    <div>{album.year}</div>
                    {album.price && <div>{this.formatPrice(album.price)}</div>}
                    {album.inventory ? 
                    <Fragment>
                        <div className="stock-in">Stock: {album.inventory}</div>
                        <div>Quantity: <input type="number" name="quantity" value={quantity} min="1" onChange={this.handleChange} /></div>
                        <div onClick={() => addToCart(album.id, quantity, album.price)}>Add To Cart</div>
                    </Fragment> : <div className="stock-out">"Out of stock!"</div>}
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