import React, { useEffect, useState } from 'react'
function Name()
{
let [name,addname]=useState("")
let [email,addemail]=useState("")
let [mobile,setmobile]=useState("")
const [users,setUsers] = useState([])

function onSubmit()
{
  let item={name,email,mobile}
  let localUser={};
 let collection= localUser.push(item);
 console.warn("users",users)
 console.warn("collection",collection)
  setUsers(collection)
 
  
}
  return(
    
    <div>
      <h1>Enter Details</h1>
      <input type="text" placeholder="enter name"  onChange={(e)=>{addname(e.target.value)}}/>
   <input type="text" placeholder="email"  onChange={(e)=>{addemail(e.target.value)}}/>
   <input type="text" placeholder="mobile"  onChange={(e)=>{setmobile(e.target.value)}} />
    <button onClick={onSubmit} type="button" >Save</button>
      
    </div>

  );
}
export default Name 