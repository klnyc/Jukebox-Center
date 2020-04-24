import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Axios from 'axios'

const initialState = {
    user: {},
    albums: [],
    album: {},
    cart: {}
}

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_ALBUMS = 'SET_ALBUMS'
const SET_ALBUM = 'SET_ALBUM'
const SET_CART = 'SET_CART'

const setUser = (user) => ({ type: SET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
const setAlbums = (albums) => ({ type: SET_ALBUMS, albums })
const setAlbum = (album) => ({ type: SET_ALBUM, album })
const setCart = (cart) => ({ type: SET_CART, cart })

export const getAlbums = (genre) => {
    return async (dispatch) => {
        try {
            const { data } = genre ? await Axios.get(`/api/albums/${genre}`) : await Axios.get('/api/albums')
            dispatch(setAlbums(data))
        } catch (error) {
            console.error('Error with albums!')
        }
    }
}

export const getAlbum = (genre, id) => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get(`/api/albums/${genre}/${id}`)
            dispatch(setAlbum(data))
        } catch (error) {
            console.error('Error with album!')
        }
    }
}

export const authenticate = (state, history) => {
    const { method, email, password } = state
    return async (dispatch) => {
        try {
            const user = await Axios.post(`/api/user/${method}`, { email, password })
            dispatch(setUser(user.data))
            window.localStorage.clear()
            history.push('/')
        } catch (error) {
            console.error(error)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            await Axios.delete('/api/user/logout')
            dispatch(removeUser())
        } catch (error) {
            console.error(error)
        }
    }
}

export const loadUser = () => {
    return async (dispatch) => {
        try {
            const user = await Axios.get('/api/user')
            dispatch(setUser(user.data || {}))
        } catch (error) {
            console.error(error)
        }
    }
}

export const updateProfile = (state, history) => {
    const { name, address } = state
    return async (dispatch) => {
        try {
            const user = await Axios.put('/api/user/profile', { name, address })
            dispatch(setUser(user.data))
            history.push('/profile')
        } catch (error) {
            console.error(error)
        }
    }
}

export const getCart = () => {
    return async (dispatch) => {
        try {
            const cart = await Axios.get('/api/cart')
            dispatch(setCart(cart.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const addToCart = (id, quantity) => {
    return async () => {
        try {
            await Axios.post('/api/cart/add', { id, quantity })
        } catch (error) {
            console.error(error)
        }
    }
}

export const removeFromCart = (orderId, albumId) => {
    return async (dispatch) => {
        try {
            await Axios.delete('/api/cart', { data: { orderId, albumId } })
            const cart = await Axios.get('/api/cart')
            dispatch(setCart(cart.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const purchaseCart = (orderId, history) => {
    return async () => {
        try {
            await Axios.put('/api/cart/purchase', { orderId })
            history.push('/confirmation')
        } catch (error) {
            console.error(error)
        }
    }
}

export const getGuestCart = () => {
    window.localStorage.cart = window.localStorage.cart || JSON.stringify({ id: true , address: '', albums: [] })
    const guestCart = JSON.parse(window.localStorage.cart)
    return (dispatch) => {
        dispatch(setCart(guestCart))
    }
}

export const addToGuestCart = (id, quantity, genre) => {
    window.localStorage.cart = window.localStorage.cart || JSON.stringify({ id: true , address: '', albums: [] })
    const guestCart = JSON.parse(window.localStorage.cart)
    return async () => {
        try {
            const { data } = await Axios.get(`/api/albums/${genre}/${id}`)
            const album = { ...data, cart: { quantity } }
            guestCart.albums.push(album)
            window.localStorage.setItem("cart", JSON.stringify(guestCart))
        } catch (error) {
            console.error(error)
        }
    }
}

export const removeFromGuestCart = (albumId) => {
    let guestCart = JSON.parse(window.localStorage.cart)
    guestCart.albums = guestCart.albums.filter(album => album.id !== albumId)
    window.localStorage.setItem("cart", JSON.stringify(guestCart))
    return (dispatch) => {
        dispatch(setCart(JSON.parse(window.localStorage.cart)))
    }
}

export const purchaseGuestCart = (history) => {
    return async () => {
        try {
            const guestCart = JSON.parse(window.localStorage.cart)
            await Axios.post('/api/cart/purchase', { guestCart })
            window.localStorage.clear()
            history.push('/confirmation')
        } catch (error) {
            console.error(error)
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user }
        case REMOVE_USER:
            return { ...state, user: {} }
        case SET_ALBUMS:
            return { ...state, albums: action.albums }
        case SET_ALBUM:
            return { ...state, album: action.album }
        case SET_CART:
            return { ...state, cart: action.cart }
        default:
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk, createLogger({ collapsed: true })))