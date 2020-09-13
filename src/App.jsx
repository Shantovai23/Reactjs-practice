import React, { useState } from 'react'
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



// import {add,sub,mul,div} from './Calculator'

//Hooks
// const App=()=>{
   
//   const [count,setCount]=useState(0)
//   const increment_num=()=>{
//     setCount(count+1)
//   }

//   return(
//     <React.Fragment>
//      <h1>{count}</h1>
//      <button onClick={increment_num} >Click</button>
//     </React.Fragment>
//   )
// }



//event handeling

// const App=()=>{
//   const [inCr,upClr]=useState('#fa9191')
//   const [name,upName]=useState('Click')

// const bgChange=()=>{
//  let newCr='red'
//  let newNam='Changed'
//  upClr(newCr)
//  upName(newNam)
// }
// const clkTwice=()=>{

// let twiceName='Twice Worked'
// let twiceClr='green'
// upName(twiceName)
// upClr(twiceClr)

// }

//  return(
//   <>
//    <div style={{backgroundColor: inCr}}>
//     <button onClick={bgChange} onDoubleClick={clkTwice}>{name}</button>
//     </div>
//   </>
//  )
// }



//react froms

const App=()=>{
 
const [name,setName]=useState()
const [storedName,upstore]=useState()

const inputEvent=(event)=>
 setName(event.target.value)

 const stored=()=>{
   upstore(name)
   console.log(name)
 }

 return(
  <>
    <h1>Hello {storedName}</h1>
    <input type='text' placeholder='Name' onChange={inputEvent} value={name}/>
    <button onClick={stored} >Submit</button>
    
  </>
 )
 }


export default App;