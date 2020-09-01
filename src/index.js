import React from 'react'
import ReactDom from 'react-dom'

//reactDom.render() with single jsx
// ReactDom.render(<h1>Hello World!</h1>,document.getElementById('root'))

//reactDom.render() with multiple jsx
ReactDom.render(<div>
 <h1>Hello World!</h1>
 <p>This Is Multiple JSX</p>
 <a href='#'> Click Here</a>
</div>,
document.getElementById('root'))