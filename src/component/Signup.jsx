import React, { useState } from 'react'
import Base from './Base'

import axios from 'axios'
import {useHistory ,Link} from 'react-router-dom';


const Signup = () => {
  let history=useHistory();
  const[type,settype]=useState("User")
  const [name, setname] = useState("")
  const [mobile ,setmobile]=useState("")
  const [email ,setemail]=useState("")
  const[password,setpassword]=useState("")
  const [file, setfile] = useState('')
  const [address, setaddress] = useState('')
  const onchange=(e)=>{
    setfile(e.target.files)
  }

  const upload=(e)=>{
      e.preventDefault()
      let formdata=new  FormData();
    formdata.append("type",type)
    formdata.append("name",name)
    formdata.append("email",email)
    formdata.append("password",password)
    formdata.append("mobile",mobile)
    formdata.append("file",file[0])
    formdata.append("address",address)
      
      axios.post ("http://localhost:80/signup",formdata)
      .then((response)=>{
          console.log(response.data)
          if(response.data.status=="ok"){
              alert("succesfully signup")
              history.push("/login")
          }
          else if(response.data.status=="300") {
              alert("user exsit")
          }
      })
      .catch((error)=>{
          console.log(error)
      })


  }


    return (
        <>
           <Base>

           <div className="main-container fadeIn animated">
  <div className="container">
    <div className="row">
      <div className="col-md-7 col-sm-12 col-form">
        <h2 className="title-style-2">SIGNUP HERE <span className="title-under" /></h2>
        <form  onSubmit={upload}>
          <div className="row">
            
            <div className="form-group col-md-6">
                         <input type="text" name="name" className="form-control" placeholder="Name*" required value={name} onChange={(e)=>{setname(e.target.value)}}/><br />
                       
                         <input type="email" name="email" className="form-control" placeholder="E-mail*" required value={email} onChange={(e)=>{setemail(e.target.value)}}/><br />
                         <input type="number" name="number" className="form-control" placeholder="Number*" required value={mobile} onChange={(e)=>{setmobile(e.target.value)}} /><br />
                         <input type="text" name="address" className="form-control" placeholder="address*" required value={address} onChange={(e)=>{setaddress(e.target.value)}} /><br />
                         <input type="password" name="name" className="form-control" placeholder="Password*" required value={password} onChange={(e)=>{setpassword(e.target.value)}} /><br/>
                         <input  className="form-control" placeholder="Profile-Pic" required  type="file"  onChange={onchange}name="file" /><br/>
                         

            </div>
            </div>	
          <div className="form-group">
            <button type="submit" className="btn btn-primary pull-right">Signup</button>
          </div>
          <div className="clearfix" />
        </form>
      </div>
      <div className="col-md-4 col-md-offset-1 col-contact">
        <h2 className="title-style-2" i> SIGNUP HERE <span className="title-under" /></h2>
        <p>
          <b>New user can signup here <span className="contact-icon"> <i class="fa fa-hand-o-down" aria-hidden="true"></i>
</span></b> 
        </p>
        <div className="contact-items">
          <ul className="list-unstyled contact-items-list">
            <li className="contact-item">   <a href="">Signup as a user</a></li>
            <li className="contact-item"><Link to="/signup1"> <a href="">Signup as ngo</a></Link></li>
             <li className="contact-item"> <span className="contact-icon"> <i className="fa fa-envelope" /></span> contact@Medihelp.org</li> 
          </ul>
        </div>
      </div>
    </div> {/* /.row */}
  </div>
</div>



           </Base> 
        </>
    )
}

export default Signup
