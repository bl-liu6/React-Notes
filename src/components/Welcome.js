import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome

// More feature rich
// Maintain their own private data - state
// Complex UI logic
// Provide lifecycle hooks
// Also called stateful/smart/container components