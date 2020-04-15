import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Axios from 'axios'

const initialState = {
    albums: []
}

const SET_ALL_ALBUMS = 'SET_ALL_ALBUMS'

const setAllAlbums = (albums) => ({ type: SET_ALL_ALBUMS, albums })

export const getAllAlbums = () => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get('api/albums')
            dispatch(setAllAlbums(data))
        } catch (error) {
            console.log('Error with albums!')
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_ALBUMS:
            return { ...state, albums: action.albums }
        default:
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk, createLogger({ collapsed: true })))