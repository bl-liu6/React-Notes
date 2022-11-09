import React from 'react'

// function Greet() {
//     return <h1>Hello Leo!</h1>
// }

const Greet = props => {
    const { name, heroName } = props
    return (
        <div>
            <h1>Hello {heroName} {name}!</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet;

// simple functions
// You should try to use function components as much as possible
// Absence of 'this' keyword
// Solution without using state
// Mainly responsible for the UI
// Also called stateless/dumb/presentaional components