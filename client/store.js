import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Axios from 'axios'

const initialState = {
    user: {},
    albums: [],
    album: {}
}

const SET_USER = 'SET_USER'
const SET_ALBUMS = 'SET_ALBUMS'
const SET_ALBUM = 'SET_ALBUM'

const setUser = (user) => ({ type: SET_USER, user })
const setAlbums = (albums) => ({ type: SET_ALBUMS, albums })
const setAlbum = (album) => ({ type: SET_ALBUM, album })

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

export const getAlbum = (genre, id) => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get(`/api/albums/${genre}/${id}`)
            dispatch(setAlbum(data))
        } catch (error) {
            console.log('Error with album!')
        }
    }
}

export const authenticate = (state, history) => {
    const { method, email, password } = state
    return async (dispatch) => {
        try {
            const user = await Axios.post(`/api/user/${method}`, { email, password })
            dispatch(setUser(user.data))
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user }
        case SET_ALBUMS:
            return { ...state, albums: action.albums }
        case SET_ALBUM:
            return { ...state, album: action.album }
        default:
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk, createLogger({ collapsed: true })))