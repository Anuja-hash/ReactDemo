import React, { useEffect, useState } from 'react'
// json format

function Info(){

  const [users,setUsers] = useState([])
  React.useEffect(()=>{
    let url="http://localhost/my_api/index.php/api/fetch/";
    fetch(url,{
      method:'POST'
    }).then((response)=>{
      response.json().then((result)=>{
        console.log(result);
		 setUsers(result)
      })
       console.log(response);
    })
  })
  return (
          <div>
         
            <h1>Information</h1>
            <table>
            <thead>
                   <th style={{border: " 1px solid red"}}>first name</th>
                   <th style={{border: " 1px solid red"}}>Last name</th>
                
                   </thead>
            {
               users.map((item,idx)=>
                   <tbody>
                   <tr style={{border: " 1px solid red"}}>
                     <td  style={{border: " 1px solid red"}}>{item.fist_name}</td>
                     <td style={{border: " 1px solid red"}}>{item.last_name}</td>
                     
                   </tr>
                   </tbody>
                
      
               
                
               )
            }
             </table>
          </div>
        )
}
export default Info