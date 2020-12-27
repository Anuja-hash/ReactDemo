import React, { useEffect, useState } from 'react'

import Child  from './Child'
function App(){
  let [name,addname]=useState("")
  let [email,addemail]=useState("")
  let [mobile,setmobile]=useState("")
  const [users,setUsers] = useState([])
  
  function onSubmit()
  {
    let id=users.length+1;
    let item={id,name,email,mobile}
    //let localUser={};
    let localUsers=[...users]
    localUsers.push(item);
  //  console.warn("users",users)
   
   //console.warn("collection",collection)
  //  localUsers=JSON.parse(JSON.stringify(localUsers))
  
    setUsers(localUsers)
   
    
  }
    return(
      
      <div>
        <h1>Enter Details</h1>
        <input type="text" placeholder="enter name"  onChange={(e)=>{addname(e.target.value)}}/>
     <input type="text" placeholder="email"  onChange={(e)=>{addemail(e.target.value)}}/>
     <input type="text" placeholder="mobile"  onChange={(e)=>{setmobile(e.target.value)}} />
      <button onClick={onSubmit} type="button" >Save</button>
        <Child users={users}/>
      </div>
  
    );
  }
export default App