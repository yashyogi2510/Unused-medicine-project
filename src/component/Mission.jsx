import React from 'react'
import Base from './Base'
import mission from '../images/mission.jpg'


const Mission = () => {
    return (
        <>
        <Base>
        <div className="container">
      <div className="row fadeIn animated">
        <div className="col-md-6">
          <img src={mission} alt className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2 className="title-style-2">MISSION  MEDIHELP <span className="title-under" /></h2>
          <p>
          The objective of this project is to prepare an online portal for the collection of unused medicines so that they can be given to the people who are in need. What this project will do is, We are trying to collect the unused medicines from the people who have completely recovered from the illness and do not require the medicines anymore. After the collection of these medicines, we would be handed over to the NGO's and those who are in need they will contact with us by using our platform. And we will also organize a monthly medical camp in rural areas and get a treatment by those medicines. There must be a login for the User, NGO, admin. Admin can see all details of user donated medicine.
          </p>
         
        </div>
      </div>
      </div> {/* /.row */}
   

        </Base>
            
        </>
    )
}

export default Mission
