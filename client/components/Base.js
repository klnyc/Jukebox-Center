import React from 'react'

class Base extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.formatPrice = this.formatPrice.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    formatPrice(price) {
        const string = price.toString()
        const dollars = string.slice(0, string.length - 2)
        const cents = string.slice(string.length - 2)
        return `$${dollars}.${cents}`
    }
}

export default Base