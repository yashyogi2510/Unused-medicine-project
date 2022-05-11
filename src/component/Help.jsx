import React from 'react'
import Base from './Base'
import t from '../images/t.jpg'
import h from '../images/h.jpg'
import {Link} from 'react-router-dom'


const Help = () => {
    return (
        <>
            <Base>
            <div className="section-home home-reasons">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="reasons-col animate-onscroll fadeIn">
            <img src= {t}alt />
            <div className="reasons-titles">
              <h3 className="reasons-title">Needy One Contact Here</h3>
              <div className="form-group">
          <Link to ="contact">  <button type="submit" className="btn btn-primary pull-right">Contect here </button></Link>
          </div>
         
            </div>
            <div className="on-hover hidden-xs">
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="reasons-col animate-onscroll fadeIn">
            <img src={h} alt />
            <div className="reasons-titles">
              <h3 className="reasons-title">Ngo Can Contact Here</h3>
              <div className="form-group">
              <Link to ="ngocontact">   <button type="submit" className="btn btn-primary pull-right">Contact here </button></Link>
          </div>
         
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

  
            </Base>
        </>
    )
}

export default Help
