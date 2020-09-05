import React from 'react'
// import Heading from './Heading'
// import Para from './Para'
// import List from './List'

// function App(){
//   return(<React.Fragment>
//       <Heading/>
//       <Para/>
//       <List/>
//   </React.Fragment>
// );
// }

import {add,sub,mul,div} from './Calculator'
function App(){
  return(
    <React.Fragment>
        <ol>
          <li>Sum of two num is {add(14,3)} </li>
          <li>Sub of two num is {sub(15,14)} </li>
          <li>Mul of two num is {mul(3,5)}</li>
          <li>Div of two num is {div(14,6)} </li>

      </ol>
    </React.Fragment>
  )
}
export default App;