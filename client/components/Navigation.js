import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAlbums } from '../store'

class Navigation extends React.Component {
    render() {
        const { getAlbums } = this.props
        const genres = ['Chinese','Country','Korean','Pop','R&B','Rap','Rock']
        return (
            <div className='navigation'>
                {genres.map((genre, index) => 
                    <Link 
                        to={`/albums/${genre}`} 
                        className="genre" 
                        key={index}
                        onClick={() => getAlbums(genre)}>
                        {genre}
                    </Link>)}
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    getAlbums: (genre) => dispatch(getAlbums(genre))
})

export default connect(null, mapDispatch)(Navigation)