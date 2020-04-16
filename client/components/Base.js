import React from 'react'

class Base extends React.Component {
    constructor() {
        super()
        this.formatPrice = this.formatPrice.bind(this)
    }

    formatPrice(price) {
        const dollars = price.slice(0, price.length - 2)
        const cents = price.slice(price.length - 2)
        return `$${dollars}.${cents}`
    }
}

export default Base