import React, { useEffect, useState } from 'react'
function Fill_Info()
{
    const [firstname,setfirstname]=useState("");
    const [Lastname,setlastname]=useState("");

   function  onSubmit()
    {
        let data={firstname,Lastname}
        console.warn(data);
        let url="http://localhost/my_api/index.php/api/insert/";
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
          }).then((response)=>{
              console.warn("response",response)

          })
    }
 return(
     <div>
         <h1>Enter your details</h1>
         <input type="text" name="firstname" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/><br/><br/>
         <input type="text" name="Lastname" value={Lastname} onChange={(e)=>{setlastname(e.target.value)}}/><br/><br/>
         <button type="button" onClick={onSubmit}>Save</button>
        
     </div>
 );
}
export default Fill_Info;