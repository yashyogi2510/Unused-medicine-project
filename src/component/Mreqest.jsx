import React from 'react'
import n from '../images/n.jpg'
import {Link} from 'react-router-dom'


const Mreqest = () => {
    return (
        <>
             <header className="main-header">
      <nav className="navbar navbar-static-top">
        <div className="navbar-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <ul className="list-unstyled list-inline header-contact">
                  <li> <i className="fa fa-phone" /> <a href="tel:">+91 123 456 7890 </a> </li>
                  <li> <i className="fa fa-envelope" /> <a href="mailto:contact@sadaka.org">contact@medihellp.org</a> </li>
                </ul> {/* /.header-contact  */}
              </div>
              <div className="col-sm-6 col-xs-12 text-right">
                <ul className="list-unstyled list-inline header-social">
                  <li> <a href="#"> <i className="fa fa-facebook" /> </a> </li>
                  <li> <a href="#"> <i className="fa fa-twitter" /></a> </li>
                  <li> <a href="#"> <i className="fa fa-google" /></a> </li>
                  <li> <a href="#"> <i className="fa fa-youtube" /></a> </li>
                  <li> <a href="#"> <i className="fa fa fa-pinterest-p" /></a> </li>
                </ul> {/* /.header-social  */}
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-main">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="index.html"><img src={n} alt="" style={{height:"45px" } } /></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse pull-right">
              <ul className="nav navbar-nav">
                <li><Link to="/"><a className="is-active" href="index.html">HOME</a></Link></li>
                <li><Link to="/about"><a href="about.html">NGO'S</a></Link></li>
                <li className="has-child"><Link to="/login"><a href="#">MEDICINE REQEST</a></Link>
                 </li>
                <li><Link to="/donate"><a href="#">DONATION REQEST</a></Link></li>
              </ul>
            </div> {/* /#navbar */}
          </div> {/* /.container */}
        </div> {/* /.navbar-main */}
      </nav> 
    </header>
            

        </>
    )
}

export default Mreqest
