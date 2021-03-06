import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

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



//React challenge #1

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

// var name='Hasibul Hasan shanto'
// ReactDom.render(<React.Fragment>
//  <h1>My name is {name}</h1>
//  <p>My lucky number is {12+3}</p>
//  <p>Lets see a random number {Math.floor(Math.random()*10)+1}</p>
// </React.Fragment>
//     ,document.getElementById('root'))



//ES6 template literals

// var name='Shanto'
// const age=23
// ReactDom.render(
//     <React.Fragment>
//         <h1>my name is {`${name} and age is ${age}`}</h1>
//     </React.Fragment>,document.getElementById('root'))




//React challenge #2

// var date=new Date().toLocaleDateString()
// var time=new Date().toLocaleTimeString()
// ReactDom.render(<React.Fragment>
//     <h1>Check Date and Time {date}</h1>
//     <p>Time is {time}</p>
// </React.Fragment>,document.getElementById('root'))


//JSX attributes 

// var imgLink='http://lorempixel.com/540/360'
// var imgLink2='http://lorempixel.com/640/460'
// ReactDom.render(<React.Fragment>
//     <h1 contentEditable="true"> Hasiul Hasan</h1>
//     <img src={imgLink} alt='random-img'/>
//     <img src={imgLink2} alt='random-img'/>
// </React.Fragment>,document.getElementById('root'))



//CSS in react

// var imgLink='http://lorempixel.com/300/250'
// var imgLink2='http://lorempixel.com/300/250'
// ReactDom.render(<React.Fragment>
//     <h1 > Hasiul Hasan</h1>

//     <div className='img-div'>
//     <img src={imgLink} alt='random-img'/>
//     <img src={imgLink2} alt='random-img'/>
//     </div>
// </React.Fragment>,document.getElementById('root'))


//inline CSS in react

// const heading={
//     color:'#fa9191',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textShadow: '0px 2px  4px #ffe9c5',
//     margin: '30px 0',
//     fontFamily: "'Gayathri', sans-serif"
// }
// var imgLink='http://lorempixel.com/300/250'
// var imgLink2='http://lorempixel.com/300/250'
// ReactDom.render(<React.Fragment>
//     <h1  style={heading}> Hasiul Hasan</h1>

//     <div className='img-div'>
//     <img src={imgLink} alt='random-img'/>
//     <img src={imgLink2} alt='random-img'/>
//     </div>
// </React.Fragment>,document.getElementById('root'))


// React Component
// import App from './App'
// ReactDom.render(<React.Fragment>
//     <App/>
// </React.Fragment>,document.getElementById('root'))

//challenge #5

import App from './App'
import { BrowserRouter } from 'react-router-dom'
ReactDom.render(<>
   <BrowserRouter>
    <App/>
    </BrowserRouter>
</>,document.getElementById('root'))