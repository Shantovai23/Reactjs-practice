import React, { useContext } from 'react'
import {fname,lname} from './App'

const ComB=()=>{
    const fname1=useContext(fname)
    const lname1=useContext(lname)
    return(<>
        <h1>Hey I am {fname1}{lname1}</h1>
    </>)
}
export default ComB