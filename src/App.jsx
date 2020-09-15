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

// const App=()=>{
 
// const [name,setName]=useState('')
// const [lastName,upLastName]=useState('')
// const [storedName,upstore]=useState('')
// const [showLastName,showUpLastName]=useState('')

// const inputEventLast=(e)=>{
//   upLastName(e.target.value)
// }
// const inputEvent=(event)=>
//  setName(event.target.value)

//  const stored=(event)=>{
//    event.preventDefault()
//    upstore(name)
//    showUpLastName(lastName)
//  }

//  return(
//   <>
//     <form onSubmit={stored}>
//     <h1>Hello {storedName} {showLastName}</h1>
//     <input type='text' placeholder='First Name' onChange={inputEvent} value={name}/>
//     <input type='text' placeholder='Last Name' onChange={inputEventLast} value={lastName}/>
//     <br/>
//     <button>Submit</button>
//     </form>
//   </>
//  )
//  }




 //react multiple input fields

 const App=()=>{
 
  const [fullName,setFullName]=useState({
    fName:'',
    lName: '',
    email:''
  })

  const inputEvent=(event)=>{
   
    const {value,name}=event.target

    setFullName((prevalue)=>{
      console.log(prevalue)

      return{
        ...prevalue,
        [name]:value
      }
      // if(name==='fName'){
      // return{
      //   fName: value,
      //   lName: prevalue.lName,
      //   email: prevalue.email
      // }
      // }else if(name==='lName') {
      //   return{
      //     fName: prevalue.fName,
      //     lName:value,
      //     email: prevalue.email
      //   }
      // } else if(name==='email'){
      //     return{
      //       fName : prevalue.fName,
      //       lName :prevalue.lName,
      //       email: value
      //     }
      // } 
    })

  }
   
   const onSubmit=(event)=>{
     event.preventDefault()
     alert('Submitted')
   }
  
   return(
    <>
      <form onSubmit={onSubmit}>
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <h3>{fullName.email}</h3>
      <input type='text' placeholder='First Name' name='fName' onChange={inputEvent} value={fullName.fName}/>
      <input type='text' placeholder='Last Name' name='lName' onChange={inputEvent}  value={fullName.lName}/>
      <input type='email' placeholder='Email' name='email' onChange={inputEvent}  value={fullName.email}/>
      <br/>
      <button>Submit</button>
      </form>
    </>
   )
   }
export default App;