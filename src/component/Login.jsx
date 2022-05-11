import React, { useState } from 'react'
import Base from './Base'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'


const Login = () => 
{let history=useHistory();
  const [email ,setemail]= useState("")
  const [password ,setpass]= useState("")

  

  const upload=(e)=>{
      e.preventDefault()
       if (email=="admin@g" && password=="admin"){
         history.push("/admin")
       }
       else{
      // dddddddffffffdddddddddddddddddddddddddddddddddddddddddddddd
      axios.post("http://localhost:80/login",{
        email:email,
        password:password
      }).then((response)=>{
        console.log(response.data)
        var token=response.data.token
        localStorage.setItem("type",response.data.docs[0].type)
        localStorage.setItem("Username",response.data.docs[0].name)
        localStorage.setItem("id",response.data.docs[0]._id)
        localStorage.setItem("Mobile",response.data.docs[0].mobile)
        localStorage.setItem("email",response.data.docs[0].email)
        localStorage.setItem("desc",response.data.docs[0].desc)
        localStorage.setItem("address",response.data.docs[0].address)
       let type=response.data.docs[0].type
       
        localStorage.setItem("token",token)
        if(token && type=="Ngo"){
            localStorage.setItem("data",JSON.stringify( response.data.docs[0]))
              history.push("/Ngo");}
             else if(token && type=="User"){
                localStorage.setItem("data",JSON.stringify( response.data.docs[0]))
                  history.push("/");}
           else {
        alert("Email Or Password may be wrong")
      }
        
  
        
      }).catch(err=>{
        console.log(err)
        alert("Email Or Password may be wrong")
      })
      // ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  
    }}

    return (
        <>
          <Base>
          <div className="main-container fadeIn animated">
  <div className="container">
    <div className="row">
      <div className="col-md-7 col-sm-12 col-form">
        <h2 className="title-style-2">LOGIN HERE <span className="title-under" /></h2>
        <form  onSubmit={upload}>
          <div className="row">
            <div className="form-group col-md-6">
                         <input type="email" name="email" className="form-control" placeholder="E-mail*" required value={email} onChange={(e)=>{setemail(e.target.value)}} /><br />
                         <input type="password" name="name" className="form-control" placeholder="Password*" required  value={password} onChange={(e)=>{setpass(e.target.value)}}/>
   

            </div>
          </div>
   
          <div className="form-group alerts">
            <div className="alert alert-success" role="alert">
            </div>
            <div className="alert alert-danger" role="alert">
            </div>
          </div>	
          <div className="form-group">
            <button type="submit" className="btn btn-primary pull-right">Login</button>
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
            <li className="contact-item"><Link to="/signup"> <a href="">Signup as a user</a></Link></li>
            <li className="contact-item"> <Link to="/signup1"><a href="">Signup as ngo</a></Link></li>
            {/* <li className="contact-item"> <span className="contact-icon"> <i className="fa fa-envelope" /></span> contact@Medihelp.org</li> */}
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
  
export default Login
