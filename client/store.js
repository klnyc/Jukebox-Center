import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import Axios from "axios"

const initialState = {
    user: {},
    albums: [],
    album: {},
    currentGenre: "",
    cart: {},
    orderHistory: [],
    error: ""
}

const SET_USER = "SET_USER"
const REMOVE_USER = "REMOVE_USER"
const SET_ALBUMS = "SET_ALBUMS"
const SET_ALBUM = "SET_ALBUM"
const SET_CURRENT_GENRE = "SET_CURRENT_GENRE"
const SET_CART = "SET_CART"
const SET_ORDER_HISTORY = "SET_ORDER_HISTORY"
const SET_ERROR = "SET_ERROR"

const setUser = (user) => ({ type: SET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
const setAlbums = (albums) => ({ type: SET_ALBUMS, albums })
const setAlbum = (album) => ({ type: SET_ALBUM, album })
export const setCurrentGenre = (currentGenre) => ({ type: SET_CURRENT_GENRE, currentGenre })
const setCart = (cart) => ({ type: SET_CART, cart })
const setOrderHistory = (orderHistory) => ({ type: SET_ORDER_HISTORY, orderHistory })
export const setError = (error) => ({ type: SET_ERROR, error })

export const getAlbums = (genre) => {
    return async (dispatch) => {
        try {
            const { data } = genre ? await Axios.get(`/api/albums/${genre}`) : await Axios.get("/api/albums")
            dispatch(setAlbums(data))
        } catch (error) {
            console.error("Error with albums!")
        }
    }
}

export const getAlbum = (genre, albumId) => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get(`/api/albums/${genre}/${albumId}`)
            dispatch(setAlbum(data))
        } catch (error) {
            console.error("Error with album!")
        }
    }
}

export const authenticate = (state, history) => {
    const { method, email, password } = state
    return async (dispatch) => {
        try {
            const { data } = await Axios.post(`/api/user/${method}`, { email, password })
            dispatch(setUser(data))
            window.localStorage.clear()
            history.push("/")
        } catch (error) {
            error ? dispatch(setError("Username or password is invalid")) : null
            console.error(error)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            await Axios.delete("/api/user/logout")
            dispatch(removeUser())
        } catch (error) {
            console.error(error)
        }
    }
}

export const loadUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get("/api/user")
            dispatch(setUser(data || {}))
        } catch (error) {
            console.error(error)
        }
    }
}

export const updateProfile = (state, history) => {
    const { name, address } = state
    return async (dispatch) => {
        try {
            const { data } = await Axios.put("/api/user/profile", { name, address })
            dispatch(setUser(data))
            history.push("/profile")
        } catch (error) {
            console.error(error)
        }
    }
}

export const getCart = () => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get("/api/cart")
            dispatch(setCart(data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const addToCart = (albumId, quantity) => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get("/api/cart")
            const exist = data.albums.some(album => album.id === albumId)
            exist ? dispatch(setError("Already added to cart")) : await Axios.post("/api/cart/add", { albumId, quantity })
        } catch (error) {
            console.error(error)
        }
    }
}

export const removeFromCart = (orderId, albumId) => {
    return async (dispatch) => {
        try {
            await Axios.delete("/api/cart", { data: { orderId, albumId } })
            const { data } = await Axios.get("/api/cart")
            dispatch(setCart(data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const purchaseCart = (orderId, address, history) => {
    return async () => {
        try {
            await Axios.put("/api/cart/purchase", { orderId, address })
            history.push("/confirmation")
        } catch (error) {
            console.error(error)
        }
    }
}

export const getGuestCart = () => {
    window.localStorage.cart = window.localStorage.cart || JSON.stringify({ id: true , address: "", albums: [] })
    const guestCart = JSON.parse(window.localStorage.cart)
    return (dispatch) => {
        dispatch(setCart(guestCart))
    }
}

export const addToGuestCart = (id, quantity, genre) => {
    window.localStorage.cart = window.localStorage.cart || JSON.stringify({ id: true , address: "", albums: [] })
    const guestCart = JSON.parse(window.localStorage.cart)
    return async (dispatch) => {
        try {
            const { data } = await Axios.get(`/api/albums/${genre}/${id}`)
            const exist = guestCart.albums.some(album => album.id === id)
            const album = { ...data, cart: { quantity } }
            exist ? dispatch(setError("Already added to cart")) : guestCart.albums.push(album) 
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

export const purchaseGuestCart = (address, history) => {
    return async () => {
        try {
            let guestCart = JSON.parse(window.localStorage.cart)
            guestCart = { ...guestCart, address }
            await Axios.post("/api/cart/purchase", { guestCart })
            window.localStorage.clear()
            history.push("/confirmation")
        } catch (error) {
            console.error(error)
        }
    }
}

export const getOrderHistory = () => {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get("/api/user/orderhistory")
            dispatch(setOrderHistory(data))
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
        case SET_CURRENT_GENRE:
            return { ...state, currentGenre: action. currentGenre }
        case SET_CART:
            return { ...state, cart: action.cart }
        case SET_ORDER_HISTORY:
            return { ...state, orderHistory: action.orderHistory }
        case SET_ERROR:
            return { ...state, error: action.error }
        default:
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk, createLogger({ collapsed: true })))