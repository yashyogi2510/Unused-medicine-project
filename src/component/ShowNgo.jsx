import React,{useState,useEffect} from 'react'
import Base from './Base'
import {useHistory ,Link,useParams} from 'react-router-dom'
import axios from 'axios'

const NgoDash = () => {
  
    const baseurl="http://localhost:80/"
    const[post,setpost]=useState([])
    const [name, setname] = useState('')
    const [ids, setid] = useState('')
    const [desc, setdesc] = useState('')
  const {id}=useParams()
  useEffect(()=>
  {
     function fech(){
      axios.get(baseurl+'senduser').then(repond=>{
         console.log(repond.data)  
         var filter=repond.data.filter((d)=>{
                
            return d._id===id
          })
          console.log(filter)
          setpost(filter)
          setname(filter[0].name)
          setid(filter[0]._id)
          setdesc(filter[0].desc)
        

      })
     
       
   }
   
   fech();
  },
  []
  )



 
    return (
      <Base>
       <div className="container">
      <div className="row fadeIn animated">
        <div className="col-md-6">
          <img src={`http://localhost:80/${ids}.jpg`} style={{marginTop:"5px",border:'2px solid black'}} alt className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2 className="title-style-2">ABOUT  {name} <span className="title-under" /></h2>
          <p>
            {desc} 
</p>
        </div>
      </div> {/* /.row */}
    
     
       </div>

      
      </Base>
    )
}

export default NgoDash
