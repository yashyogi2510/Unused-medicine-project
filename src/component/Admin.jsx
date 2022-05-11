import React from 'react'
import {Link} from 'react-router-dom'
import n from '../images/n.jpg'
import l from '../images/l.jpeg'
const Admin = () => {
    return (
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
            
              <li><Link to="AdminDonate"><a href="about.html">Donate-MEDICINE</a></Link></li>
              
              <li><Link to="/AdminRequest"><a href="#">REQUEST-MEDICINE</a></Link></li>
            
            </ul>
          </div> {/* /#navbar */}
          </div>
          <br/><br/><br/><br/><br/>
          <div className="row fadeIn animated">
        <div className="col-md-6">
          <img src={l} alt className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2 className="title-style-2">ABOUT   MEDIHELP <span className="title-under" /></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, nulla quae possimus id fugit totam perspiciatis ad consequatur natus dolores unde ipsa, architecto, dignissimos corrupti explicabo provident debitis suscipit, beatae!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi pariatur, voluptatum molestiae voluptas ducimus tempora numquam eligendi quos, quia aut quidem et, odio deleniti amet natus accusamus fugit! Temporibus, tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatem, ea, quisquam vero ullam nesciunt recusandae expedita similique nisi! Ducimus, reiciendis, quia. Explicabo minima error excepturi minus, aperiam illum fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi pariatur, voluptatum molestiae voluptas ducimus tempora numquam eligendi quos, quia aut quidem et, odio deleniti amet natus accusamus fugit! Temporibus, tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatem, ea, quisquam vero ullam nesciunt recusandae expedita similique nisi! Ducimus, reiciendis, quia. Explicabo minima error excepturi minus, aperiam illum fugit , quia. Explicabo minima error excepturi minus, aperiam illum fugit.
          </p>
        </div>
      </div> {/* /.row */}
        
      </div> 
    //   fffffffffff
    
      
    )
}

export default Admin
