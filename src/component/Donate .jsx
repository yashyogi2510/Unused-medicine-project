import React,{useState} from 'react'
import Base from './Base'
import {useHistory ,Link} from 'react-router-dom'
import axios from 'axios'


const Donate  = () => {

  const type=localStorage.getItem("type")
  
  let history=useHistory();

  
  const [medicinename,setmedicinename]=useState('')
  const [message, setmess] = useState('')
  const [disease, setdisease] = useState('')
  const [expiredate, setexpiredate] = useState('')
  const [file, setfile] = useState('')
  const onchange=(e)=>{
    setfile(e.target.files)
  }
  const token=localStorage.getItem("token")
  const Username=localStorage.getItem("Username")
  const Useremail=localStorage.getItem("email")
  const userno=localStorage.getItem("Mobile")
  const useradd=localStorage.getItem("address")
  const upload=(e)=>{
    e.preventDefault()
    let formdata=new  FormData();
    formdata.append("name",Username)
    formdata.append("email",Useremail)
    formdata.append("expiredate",expiredate)
    formdata.append("message",message)
    formdata.append("mobile",userno)
    formdata.append("address",useradd)
    formdata.append("medicinname",medicinename)
    formdata.append("diseasename",disease)
    formdata.append("file",file[0])
    axios.post("http://localhost:80/donate",formdata).then((response)=>{
      
      console.log(response.data)
      if(response.data.status==="ok"){
        alert("THANKS TO HELP,OUR TEAM WILL CONTACT YOU SOON")
        history.push("/")

      }
      else if(response.data.status==="300"){
        alert("Please refill the form")

      }
    })
    .catch((err)=>{
      console.log(err)
      alert("Sorry there may be some internal problem")
    })
  
  }
  if(token && type==="User"){
    return (
        <>
               <Base>
<div className="main-container fadeIn animated">
  <div className="container">
    <div className="row">
      <div className="col-md-7 col-sm-12 col-form">
        <h2 className="title-style-2">DONATE HERE <span className="title-under" /></h2>
        <form onSubmit={upload}>
          <div className="row">
            <div className="form-group col-md-6">
            <input type="text" name="email" className="form-control" placeholder="Medicine-Name" required value={medicinename} onChange={(e)=>{setmedicinename(e.target.value)}} /><br />
            </div>
            <div className="form-group col-md-6">
            <input type="text" name="email" className="form-control" placeholder="Disease-name*" required value={disease} onChange={(e)=>{setdisease(e.target.value)}} /><br />
            </div>
          </div>
       

         
            <div className="row">
            <div className="form-group col-md-6">
            <label htmlFor="">Expired date:</label>&nbsp;&nbsp;&nbsp;
             <input type="Date" name="date" id="" value={expiredate} onChange={(e)=>{setexpiredate(e.target.value)}} placeholder="Expired date" /><br />
             </div>
             <div className="form-group col-md-6">
             <input  className="form-control" placeholder="Profile-Pic" required  type="file"  onChange={onchange}name="file" /><br/>
              
              </div>
         
            </div>
         
         
         
          <div className="form-group">
            <textarea name="message" rows={5} className="form-control" value={message} onChange={(e)=>{setmess(e.target.value)}} placeholder="Message*" required defaultValue={""} />
          </div>
         	
          <div className="form-group">
            <button type="submit" className="btn btn-primary pull-right">Submit</button>
          </div>
          <div className="clearfix" />
        </form>
      </div>
      <div className="col-md-4 col-md-offset-1 col-contact">
        <h2 className="title-style-2"> MEDIHELP CONTACTS <span className="title-under" /></h2>
        <p>
          <b>Medihelp</b> You can donate your unused medicine us to save others life ,your small contribuation save someone life </p>
          <p>You Can Conatct Us <span className="contact-icon"> <i class="fa fa-hand-o-down" aria-hidden="true"></i>
</span></p>
        <div className="contact-items">
          <ul className="list-unstyled contact-items-list">
            <li className="contact-item"> <span className="contact-icon"> <i className="fa fa-map-marker" /></span> 135 b gopalpura,  Jaipur</li>
            <li className="contact-item"> <span className="contact-icon"> <i className="fa fa-phone" /></span> +91 123 456  7890</li>
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
  else 
  {
    return(
      
      	
      <div className="form-group col-md-6" style={{marginTop:"20%" ,marginLeft:"8%"}}>
     <Link to="/login"> <button type="submit" className="btn btn-primary pull-right">PLEASE LOGIN FIRST</button>
     </Link>
    </div>
    
      )
  }
}

export default Donate 
