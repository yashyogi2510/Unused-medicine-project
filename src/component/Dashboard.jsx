import React,{useState,useEffect} from 'react'
import Base from './Base'
import axios from 'axios'
import a from '../images/a.webp'
import b from '../images/b.jpg'
import d from '../images/d.jpg'
import e from '../images/e.jpg'
import f from '../images/f.jfif'
import j from '../images/j.jpg'
import h from '../images/h.jpg'
import o from '../images/o.jpg'
import t from '../images/t.jpg'
import d1 from '../images/d1.jpg'
import d2 from '../images/d2.jpg'
import d3 from '../images/d3.jpg'
import d4 from '../images/d4.jpg'
import d6 from '../images/d6.jpg'

import {Link} from 'react-router-dom'








const Dashboard = () => {
  const baseurl="http://localhost:80/"
  var id=localStorage.getItem("id")
  const [post, setpost] = useState([])
  useEffect(()=>
  {
     function fech(){
      axios.get(baseurl+'senduser').then(repond=>{
         console.log(repond.data)  

         var filter=repond.data.filter((d)=>{
              
           return d.type==="Ngo"
         })
         console.log(filter)
         setpost(filter)
      })
     
       
   }
   
   fech();
  },
  []
  )



    return (
        <>
        <Base>
     <div>
  {/* Carousel
    ================================================== */}
  <div id="homeCarousel" className="carousel slide carousel-home" data-ride="carousel">
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li data-target="#homeCarousel" data-slide-to={0} className="active" />
      <li data-target="#homeCarousel" data-slide-to={1} />
      <li data-target="#homeCarousel" data-slide-to={2} />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src={o} alt style={{height:"450px"}} />
        <div className="container">
          <div className="carousel-caption">
            <h2 className="carousel-title bounceInDown animated slow">Because they need your help</h2>
            <h4 className="carousel-subtitle bounceInUp animated slow ">Do not let them down</h4>
            <Link to="/donate">  <a href="#" className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow" data-toggle="modal" data-target="#donateModal">DONATE NOW</a></Link>
          </div> {/* /.carousel-caption */}
        </div>
      </div> {/* /.item */}
      <div className="item ">
        <img src={j} alt style={{height:"450px"}} />
        <div className="container">
          <div className="carousel-caption">
            <h2 className="carousel-title bounceInDown animated slow">IF WE HAVE MEDICINE WE CAN DONATE </h2>
            <h4 className="carousel-subtitle bounceInUp animated slow"> So let's do it !</h4>
            <Link to="/donate">  <a href="#" className="btn btn-lg btn-secondary hidden-xs bounceInUp animated" data-toggle="modal" data-target="#donateModal">DONATE NOW</a></Link>
          </div> {/* /.carousel-caption */}
        </div>
      </div> {/* /.item */}
      <div className="item ">
        <img src="assets/images/slider/home-slider-3.jpg" alt style={{height:"450px"}} />
        <div className="container">
          <div className="carousel-caption">
            <h2 className="carousel-title bounceInDown animated slow">A DONATION CAN GIVE LIFE TO PERSON</h2>
            <h4 className="carousel-subtitle bounceInUp animated slow">You can make the diffrence !</h4>
           <Link to="/donate"> <a href="#" className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow" data-toggle="modal" data-target="#donateModal">DONATE NOW</a></Link>
          </div> {/* /.carousel-caption */}
        </div>
      </div> {/* /.item */}
    </div>
    <a className="left carousel-control" href="#homeCarousel" role="button" data-slide="prev">
      <span className="fa fa-angle-left" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#homeCarousel" role="button" data-slide="next">
      <span className="fa fa-angle-right" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>{/* /.carousel */}
  <div className="section-home about-us fadeIn animated">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/our-mission-icon.png" alt />
            </div>
            <h3 className="col-title">our mission</h3>
            <div className="col-details">
              <p>The objective of this project is to prepare an online portal for the collection of unused medicine. </p>
            </div>
            <Link to="/mission"><a href="#" className="btn btn-primary"> Read more </a></Link>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/make-donation-icon.png" alt />
            </div>
            <h3 className="col-title">Make donations</h3>
            <div className="col-details">
              <p>Donate the unused medicine and help the needed person and save the life </p>
            </div>
           <Link to="/donate"> <a href="#" className="btn btn-primary"> Read more </a></Link>
          </div>
        </div>
     
        <div className="col-md-4 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/programs-icon.png" alt />
            </div>
            <h3 className="col-title">our programs</h3>
            <div className="col-details">
              <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
            </div>
           <Link to="/program"> <a href="#" className="btn btn-primary"> Read more </a></Link>
          </div>
        </div>
      </div>
    </div>
  </div> {/* /.about-us */}
  <div className="section-home home-reasons">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="reasons-col ">
            <img src= {t}alt />
            <div className="reasons-titles">
              <h3 className="reasons-title">We fight together</h3>
              <h5 className="reason-subtitle">We are humans</h5>
            </div>
            <div className="on-hover hidden-xs">
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="reasons-col ">
            <img src={h} alt />
            <div className="reasons-titles">
              <h3 className="reasons-title">WE care about others</h3>
              <h5 className="reason-subtitle">We are humans</h5>
            </div>
            <div className="on-hover hidden-xs">
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> {/* /.home-reasons */}

   <div className="section-home our-causes ">
    <div className="container">
    <h2 className="title-style-1">NGO'S CONNECTED WITH US <span className="title-under" /></h2>
      <div className="row">
        {post.map((d)=>{
          return(
            <>
                <div className="col-md-3 col-sm-6">
          <div className="cause">
            <img src={`http://localhost:80/${d._id}.jpg`} alt className="cause-img" />
            <Link to={`/ShowNgo/${d._id}`} >   <h4 className="cause-title"><a href="#">{d.name} </a></h4></Link>
         
            
          </div> {/* /.cause */}
        </div> 
            </>
          )
        })}
      </div>
    </div>
  </div> {/* /.our-causes */}
  
</div>
        </Base>
           
        </>
    )
}

export default Dashboard
