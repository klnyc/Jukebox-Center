import React from 'react'
import { connect } from 'react-redux'
import { getAlbums } from '../store'

class Albums extends React.Component {
    componentDidMount() {
        const { genre } = this.props.match.params
        const { getAlbums } = this.props
        genre ? getAlbums(genre) : getAlbums()
    }

    render() {
        const { albums } = this.props
        return (
            <div className="albums">
                {albums.map(album => {
                    return (
                        <div className="album" key={album.id}>
                            <div><img className="album-image" src={album.image} /></div>
                            <div>{album.title}</div>
                            <div>{album.artist}</div>
                            <div>${album.price/2}</div>
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