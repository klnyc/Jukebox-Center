import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAlbums } from '../store'

class Albums extends React.Component {
    constructor() {
        super()
        this.formatPrice = this.formatPrice.bind(this)
    }

    componentDidMount() {
        const { genre } = this.props.match.params
        const { getAlbums } = this.props
        genre ? getAlbums(genre) : getAlbums()
    }

    formatPrice(price) {
        const dollars = price.slice(0, price.length - 2)
        const cents = price.slice(price.length - 2)
        return `${dollars}.${cents}`
    }

    render() {
        const { albums } = this.props
        return (
            <div className="albums">
                {albums.map(album => {
                    return (
                        <div className="albums-album" key={album.id}>
                            <Link to={`/albums/${album.genre}/${album.id}`}><img className="albums-album-image" src={album.image} /></Link>
                            <div>{album.title}</div>
                            <div>{album.artist}</div>
                            <div>{this.formatPrice(album.price)}</div>
                            {album.inventory
                            ? <div className="stock-in">Stock: {album.inventory}</div> 
                            : <div className="stock-out">"Out of stock!"</div>}
                            <div>Add To Cart</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapState = (state) => ({
    albums: state.albums
})

const mapDispatch = (dispatch) => ({
    getAlbums: (genre) => dispatch(getAlbums(genre))
})

export default connect(mapState, mapDispatch)(Albums)