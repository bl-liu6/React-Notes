import React from 'react'

// function Greet() {
//     return <h1>Hello Leo!</h1>
// }

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.heroName} {props.name}!</h1>
            {props.children}
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