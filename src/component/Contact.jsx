import React  from 'react'
import Base from './Base'


const Contact = () => {
 
    return (
        <>
        <Base>
<div className="main-container fadeIn animated">
  <div className="container">
    <div className="row">
      <div className="col-md-7 col-sm-12 col-form">
        <h2 className="title-style-2">CONTACT FORM <span className="title-under" /></h2>
        <form action="php/mail.php" className="contact-form ajax-form">
          <div className="row">
            <div className="form-group col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Name*" required />
            </div>
            <div className="form-group col-md-6">
              <input type="email" name="email" className="form-control" placeholder="E-mail*" required />
            </div>
          </div>
          <div className="form-group">
            <textarea name="message" rows={5} className="form-control" placeholder="Message*" required defaultValue={""} />
          </div>
          <div className="form-group alerts">
            <div className="alert alert-success" role="alert">
            </div>
            <div className="alert alert-danger" role="alert">
            </div>
          </div>	
          <div className="form-group">
            <button type="submit" className="btn btn-primary pull-right">Send message</button>
          </div>
          <div className="clearfix" />
        </form>
      </div>
      <div className="col-md-4 col-md-offset-1 col-contact">
        <h2 className="title-style-2"> MEDIHELP CONTACTS <span className="title-under" /></h2>
        <p>
          <b>Medihelp</b> ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum semper quis ex. Donec lorem nulla .
        </p>
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

export default Contact
