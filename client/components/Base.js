import React from "react"

class Base extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.formatPrice = this.formatPrice.bind(this)
    }

    handleChange(event) {
        const inputName = event.target.name
        const inputLength = event.target.value.length
        if (inputName === "quantity" || inputName === "MM" || inputName === "YY") {
            if (inputLength <= 2) this.setState({ [event.target.name]: event.target.value })
        } else if (inputName === "CVC") {
            if (inputLength <= 3) this.setState({ [event.target.name]: event.target.value })
        } else if (inputName === "CC") {
            if (inputLength <= 16) this.setState({ [event.target.name]: event.target.value })
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    formatPrice(price) {
        const string = price.toString()
        const dollars = string.slice(0, string.length - 2)
        const cents = string.slice(string.length - 2)
        return `$${dollars}.${cents}`
    }
}

export default Base