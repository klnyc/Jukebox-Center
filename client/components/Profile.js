import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Base from "./Base"
import { updateProfile, getOrderHistory } from "../store"

class Profile extends Base {
    constructor() {
        super()
        this.state = {
            edit: false,
            fields: [],
            name: "",
            address: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderProfile = this.renderProfile.bind(this)
        this.renderProfileEdit = this.renderProfileEdit.bind(this)
    }

    componentDidMount() {
        const { user, getOrderHistory } = this.props
        const fields = [
            { category: "Email", data: user.email },
            { category: "Name", data: user.name },
            { category: "Address", data: user.address }
        ]
        getOrderHistory()
        this.props.match.path === "/profile/edit"
        ? this.setState({ edit: true, fields }) 
        : this.setState({ edit: false, fields })
    }

    handleSubmit(event) {
        const { updateProfile, history } = this.props
        event.preventDefault()
        updateProfile(this.state, history)
    }

    renderProfile(fields) {
        return (
            <>
                {fields.map((field, index) => 
                    <div className="profile-fields" key={index}>
                        <div className="profile-column left">{field.category}</div>
                        <div className="profile-column right">{field.data || "-"}</div>
                    </div> 
                )}
                <div className="profile-submit-button"><Link to="/profile/edit">Edit Account Information</Link></div>
            </>
        )
    }

    renderProfileEdit(fields) {
        return (
            <>
                <div className="profile-fields">
                    <div className="profile-column type"></div>
                    <div className="profile-column current">Current</div>
                    <div className="profile-column new">New</div>
                </div>
                {fields.slice(1).map((field, index) => 
                    <div className="profile-fields" key={index}>
                        <div className="profile-column type">{field.category}</div>
                        <div className="profile-column current">{field.data || "-"}</div>
                        <div className="profile-column new">
                            <input name={field.category.toLowerCase()} value={this.state[field.category.toLowerCase()]} onChange={this.handleChange} />
                        </div>
                    </div> 
                )}
                <div className="profile-submit-button" onClick={this.handleSubmit}>Submit Changes</div>
            </>
        )
    }

    render() {
        const { edit, fields } = this.state
        const { orderHistory } = this.props
        return (
            <div className="profile">
                <div className="profile-information">
                    {edit ? this.renderProfileEdit(fields) : this.renderProfile(fields)}
                </div>
                <div className="profile-orders">
                    <div>Order History</div>
                    <div className="profile-orders-list">
                        {orderHistory.map(order => 
                            order.albums.map(album =>
                                <div className="cart-albums-container" key={album.cart.albumId}>
                                    <div><img className="cart-albums-image" src={album.image} /></div>
                                    <div className="cart-albums-details">
                                        <div>Title: {album.title}</div>
                                        <div>Artist: {album.artist}</div>
                                        <div>Price: {this.formatPrice(album.price)}</div>
                                        <div>Quantity: {album.cart.quantity}</div>
                                        <div>Date: {order.updatedAt.slice(0,10)}</div>
                                    </div>
                                </div>)
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user,
    orderHistory: state.orderHistory
})

const mapDispatch = (dispatch) => ({
    updateProfile: (state, history) => dispatch(updateProfile(state, history)),
    getOrderHistory: () => dispatch(getOrderHistory())
})

export default connect(mapState, mapDispatch)(Profile)