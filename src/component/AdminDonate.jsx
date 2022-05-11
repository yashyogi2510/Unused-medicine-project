import React,{useState,useEffect} from 'react'
import Base from './Base'
import {useHistory ,Link,useParams} from 'react-router-dom'
import axios from 'axios'

const AdminDonate = () => {
  
    const baseurl="http://localhost:80/"
    const[post,setpost]=useState([])

  useEffect(()=>
  {
     function fech(){
      axios.get(baseurl+'senddonated-medicine').then(repond=>{
         console.log(repond.data)  
       
        
          setpost(repond.data)
        
        

      })
     
       
   }
   
   fech();
  },
  []
  )



 
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">User-Contact</th>
            <th scope="col">Medicine-Name</th>
            <th scope="col">User-Address</th>
            <th scope="col">Expire-Date</th>
          </tr>
        </thead>
        <tbody>
        
              {post.map((d,index)=>{
                  return(
                      <tr>
      <th scope="row">{index}</th>
            <td>{d.name}</td>
            <td>{d.mobile}</td>
            <td>{d.medicinname}</td>
            <td>{d.address}</td>
            <td>{d.expiredate}</td>
            </tr>
      
               )
              })}
            
       
      
        </tbody>
      </table>
    )
}

export default AdminDonate
