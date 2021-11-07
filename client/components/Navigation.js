import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import store, { getAlbums, setCurrentGenre } from "../store"

class Navigation extends React.Component {
    render() {
        const { getAlbums, currentGenre } = this.props
        const genres = ["Chinese","Country","Korean","Pop","R&B","Rap","Rock"]
        return (
            <div className="navigation">
                <Link 
                    to={"/albums"} 
                    className={currentGenre === "All" ? "navigation-genre selected-genre" : "navigation-genre"} 
                    onClick={() => { getAlbums(); store.dispatch(setCurrentGenre("All")) }}>
                    All
                </Link>
                {genres.map((genre, index) => 
                    <Link 
                        to={`/albums/${genre}`} 
                        className={currentGenre === genre ? "navigation-genre selected-genre" : "navigation-genre"}
                        key={index}
                        onClick={() => { getAlbums(genre); store.dispatch(setCurrentGenre(genre)) }}>
                        {genre}
                    </Link>)}
            </div>
        )
    }
}

const mapState = (state) => ({
    currentGenre: state.currentGenre
})

const mapDispatch = (dispatch) => ({
    getAlbums: (genre) => dispatch(getAlbums(genre))
})

export default connect(mapState, mapDispatch)(Navigation)