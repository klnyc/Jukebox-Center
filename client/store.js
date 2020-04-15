import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Axios from 'axios'

const initialState = {
    albums: []
}

const SET_ALBUMS = 'SET_ALBUMS'

const setAlbums = (albums) => ({ type: SET_ALBUMS, albums })

export const getAlbums = (genre) => {
    return async (dispatch) => {
        try {
            const { data } = genre ? await Axios.get(`/api/albums/${genre}`) : await Axios.get('/api/albums')
            dispatch(setAlbums(data))
        } catch (error) {
            console.log('Error with albums!')
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            return { ...state, albums: action.albums }
        default:
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk, createLogger({ collapsed: true })))