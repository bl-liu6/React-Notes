import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props
        // const { state1, state2 } = this.state
        return (
            <h1>Welcome {name} a.k.a {heroName}</h1>
        )
    }
}

export default Welcome

// More feature rich
// Maintain their own private data - state
// Complex UI logic
// Provide lifecycle hooks
// Also called stateful/smart/container components