import React from 'react'
import { connect } from 'react-redux'
import { getAlbum } from '../store'

class Album extends React.Component {
    componentDidMount() {
        const { genre, id } = this.props.match.params
        const { getAlbum } = this.props
        getAlbum(genre, id)
    }

    render() {
        const { album } = this.props
        return (
            <div className="album">
                <div><img src={album.image} /></div>
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