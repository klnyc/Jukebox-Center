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
        const dollars = price.slice(0, price.length - 2)
        const cents = price.slice(price.length - 2)
        return `$${dollars}.${cents}`
    }
}

export default Base