import React, { useState } from 'react'
//import App  from './App'
function Child(prop)
{
    const [localUser,setLocalUser]=useState([])
    console.warn(prop)
    React.useEffect(()=>{
        setLocalUser(prop.users)
    },[prop.users])
    function delete_data(item)
    {
    
    console.warn(item)
    let collection=localUser.filter((data)=>data.id!=item.id)
    setLocalUser(collection)
    
    }
    {
        return (
          <div>
         
            <h1>User List</h1>
            <table>
            <thead>
                   <th style={{border: " 1px solid red"}}>Name</th>
                   <th style={{border: " 1px solid red"}}>Email</th>
                   <th style={{border: " 1px solid red"}}>Mobile</th>
                   <th style={{border: " 1px solid red"}}>Action</th>
                   </thead>
            {
               localUser.map((item,idx)=>
                   <tbody>
                   <tr style={{border: " 1px solid red"}}>
                     <td  style={{border: " 1px solid red"}}>{item.name}</td>
                     <td style={{border: " 1px solid red"}}>{item.email}</td>
                     <td style={{border: " 1px solid red"}}>{item.mobile}</td>
                     <td style={{border: " 1px solid red"}}><button type="button" onClick={()=>delete_data(item)}>Delete</button></td>
                     
                   </tr>
                   </tbody>
                
      
               
                
               )
            }
             </table>
          </div>
        )
      }

}
export default Child