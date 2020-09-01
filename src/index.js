import React from 'react'
import ReactDom from 'react-dom'

//reactDom.render() with single jsx

// ReactDom.render(<h1>Hello World!</h1>,document.getElementById('root'))



//reactDom.render() with multiple jsx

// ReactDom.render(<div>
//  <h1>Hello World!</h1>
//  <p>This Is Multiple JSX</p>
//  <a href='#'> Click Here</a>
// </div>,
// document.getElementById('root'))




//React.Fragment

// ReactDom.render(<React.Fragment>
//     <h1>Hello World!</h1>
//     <p>This Is Multiple JSX</p>
//     <a href='#'> Click Here</a>
//     <h2>Hey Bro!</h2>
//    </React.Fragment>,
//    document.getElementById('root'))



//React first-challenge

// ReactDom.render(<React.Fragment>
//     <h1>Netflix</h1>
//     <p>My top 5 netflix series</p>
//     <ul>
//         <li>Dark</li>
//         <li>Stranger Things</li>
//         <li>Sex Education</li>
//         <li>Money Heist</li>
//         <li>Breaking Bad</li>
//     </ul>
// </React.Fragment>, document.getElementById('root'));




//react jsx expression

var name='Hasibul Hasan shanto'
ReactDom.render(<React.Fragment>
 <h1>My name is {name}</h1>
 <p>My lucky number is {12+3}</p>
 <p>Lets see a random number {Math.floor(Math.random()*10)+1}</p>
</React.Fragment>
    ,document.getElementById('root'))
