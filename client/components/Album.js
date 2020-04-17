import React from 'react'
import { connect } from 'react-redux'
import { getAlbum } from '../store'
import Base from './Base'

class Album extends Base {
    componentDidMount() {
        const { genre, id } = this.props.match.params
        const { getAlbum } = this.props
        getAlbum(genre, id)
    }

    render() {
        const { album } = this.props
        return (
            <div className="album">
                <img className="album-image" src={album.image} />
                <div className="album-tracklist">
                    <div>Tracklist</div>
                </div>
                <div className="album-info">
                    <div>{album.title}</div>
                    <div>{album.artist}</div>
                    <div>{album.genre}</div>
                    <div>{album.year}</div>
                    <div>{album.inventory}</div>
                    {album.price && <div>{this.formatPrice(album.price)}</div>}
                    <div>Add To Cart</div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    album: state.album
})

const mapDispatch = (dispatch) => ({
    getAlbum: (genre, id) => dispatch(getAlbum(genre, id))
})

export default connect(mapState, mapDispatch)(Album)