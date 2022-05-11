import React,{useState,useEffect} from 'react'
import Base from './Base'
import {useHistory ,Link} from 'react-router-dom'
import axios from 'axios'

const NgoDash = () => {
  const token=localStorage.getItem("token")
  const id=localStorage.getItem("id")
  const Username=localStorage.getItem("Username")
  const Useremail=localStorage.getItem("email")
  const userno=localStorage.getItem("Mobile")
  const useradd=localStorage.getItem("address")
  const desc=localStorage.getItem("desc")
    return (
      <Base>
       <div className="container">
      <div className="row fadeIn animated">
        <div className="col-md-6">
          <img src={`http://localhost:80/${id}.jpg`} style={{marginTop:"5px",border:'2px solid black'}} alt className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2 className="title-style-2">ABOUT  {Username} <span className="title-under" /></h2>
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
