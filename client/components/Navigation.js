import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAlbums } from '../store'

class Navigation extends React.Component {
    constructor() {
        super()
        this.state = { currentGenre: "" }
        this.setCurrentGenre = this.setCurrentGenre.bind(this)
    } 

    setCurrentGenre(selectedGenre) {
        this.setState({ currentGenre: selectedGenre })
    }

    render() {
        const { currentGenre } = this.state
        const { getAlbums } = this.props
        const genres = ['Chinese','Country','Korean','Pop','R&B','Rap','Rock']
        return (
            <div className='navigation'>
                <Link 
                    to={'/albums'} 
                    className={currentGenre === "All" ? "navigation-genre selected-genre" : "navigation-genre"} 
                    onClick={() => { getAlbums(); this.setCurrentGenre("All") }}>
                    All
                </Link>
                {genres.map((genre, index) => 
                    <Link 
                        to={`/albums/${genre}`} 
                        className={currentGenre === genre ? "navigation-genre selected-genre" : "navigation-genre"}
                        key={index}
                        onClick={() => { getAlbums(genre); this.setCurrentGenre(genre) }}>
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