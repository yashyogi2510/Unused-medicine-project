import React from 'react'
import Base from './Base'
import l from '../images/l.jpeg'
import yash from '../images/yash.jpg'
import {Link} from 'react-router-dom'


const About = () => {
    return (
        <>
          <Base>
         <div>
  <div className="main-container">
    <div className="container">
      <div className="row fadeIn animated">
        <div className="col-md-6">
          <img src={l} alt className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2 className="title-style-2">ABOUT   MEDIHELP <span className="title-under" /></h2>
          <p>
          The objective of this project is to prepare an online portal for the collection of unused medicines so that they can be given to the people who are in need. What this project will do is, We are trying to collect the unused medicines from the people who have completely recovered from the illness and do not require the medicines anymore. After the collection of these medicines, we would be handed over to the NGO's and those who are in need they will contact with us by using our platform. And we will also organize a monthly medical camp in rural areas and get a treatment by those medicines. There must be a login for the User, NGO, admin. Admin can see all details of user donated medicine.

A donation of tablets/medicines, when well organized and controlled, can save lives and ease the suffering. Actual donation practices can provide savings in budgets for development funding, so that these facilities can be used for other purposes
The objective of this project is to prepare an online portal for the collection of unused medicines so that they can be given to the people who are in need. What this project will do is, We are trying to collect the unused medicines from the people who have completely recovered from the illness and do not require the medicines anymore. After the collection of these medicines, we would be handed over to the NGO's and those who are in need they will contact with us by using our platform. And we will also organize a monthly medical camp in rural areas and get a treatment by those medicines. There must be a login for the User, NGO, admin. Admin can see all details of user donated medicine.

A donation of tablets/medicines, when well organized and controlled, can save lives and ease the suffering. Actual donation practices can provide savings in budgets for development funding, so that these facilities can be used for other purposes
          </p>
         
        </div>
      </div> {/* /.row */}
      <div className="section-home about-us fadeIn animated">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/our-mission-icon.png" alt />
            </div>
            <h3 className="col-title">our mission</h3>
            <div className="col-details">
              <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
            </div>
            <Link to="/mission"><a href="#" className="btn btn-primary"> Read more </a></Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/make-donation-icon.png" alt />
            </div>
            <h3 className="col-title">Make donations</h3>
            <div className="col-details">
              <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
            </div>
           <Link to="/donate"> <a href="#" className="btn btn-primary"> Read more </a></Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/help-icon.png" alt />
            </div>
            <h3 className="col-title">Help &amp; support</h3>
            <div className="col-details">
              <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
            </div>
           <Link to="/support"> <a href="#" className="btn btn-primary"> Read more </a></Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
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
 </div>
      </div></div>
    <div className="our-team ">
  <div className="container">
    <h2 className="title-style-1">Our Team <span className="title-under" /></h2>
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="team-member">
          <div className="thumnail">
            <img src={yash} alt className="cause-img" />
          </div>
          <h4 className="member-name"><a href="#">Yash Yogi</a></h4>
          <div className="btn-holder">
            <a href="#" className="btn"> <i className="fa fa-envelope" /> </a>
            <a href="#" className="btn"> <i className="fa fa-facebook" /> </a>
            <a href="#" className="btn"> <i className="fa fa-google" /> </a>
            <a href="#" className="btn"> <i className="fa fa-twitter" /> </a>
            <a href="#" className="btn"> <i className="fa fa-linkedin" /> </a>
          </div>
        </div> {/* /.team-member */}
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team-member">
          <div className="thumnail">
            <img src="assets/images/team/member-3.jpg" alt className="cause-img" />
          </div>
          <h4 className="member-name"><a href="#">Ragini Priya</a></h4>
          <div className="btn-holder">
            <a href="#" className="btn"> <i className="fa fa-envelope" /> </a>
            <a href="#" className="btn"> <i className="fa fa-facebook" /> </a>
            <a href="#" className="btn"> <i className="fa fa-google" /> </a>
            <a href="#" className="btn"> <i className="fa fa-twitter" /> </a>
            <a href="#" className="btn"> <i className="fa fa-linkedin" /> </a>
          </div>
        </div> {/* /.team-member */}
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team-member">
          <div className="thumnail">
            <img src="assets/images/team/member-4.jpg" alt className="cause-img" />
          </div>
          <h4 className="member-name"><a href="#">Anu Kumawat</a></h4>
          <div className="btn-holder">
            <a href="#" className="btn"> <i className="fa fa-envelope" /> </a>
            <a href="#" className="btn"> <i className="fa fa-facebook" /> </a>
            <a href="#" className="btn"> <i className="fa fa-google" /> </a>
            <a href="#" className="btn"> <i className="fa fa-twitter" /> </a>
            <a href="#" className="btn"> <i className="fa fa-linkedin" /> </a>
          </div>
        </div> {/* /.team-member */}
      </div>
      
    </div> {/* /.row */}
  </div>
</div>
      </Base>  
        </>
    )
}

export default About
