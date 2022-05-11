import React from 'react'
import Dashboard from './component/Dashboard'
import { BrowserRouter as Routers, Route, Switch } from "react-router-dom";
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';
import Signup1 from './component/Signup1';
import Donate from './component/Donate ';
import Mission from './component/Mission';

import Help from './component/Help';
import ShowNgo from './component/ShowNgo'

import Programs from './component/Programs';
import Ngocontact from './component/Ngocontact';
import NgoDash from './component/NgoDash';
import Logout from './component/Logout';
import Admin from './component/Admin'
import RequestMedicine from './component/RequestMedicine'
import RequestedMedicine from './component/RequestedMedicine'
import AdminDonate from './component/AdminDonate'
import AdminRequest from './component/AdminRequest'








const Router = () => {
    return (
        <>
           <Routers>
               <Switch>
                   <Route exact path="/"><Dashboard/></Route>
                   <Route exact path="/about"><About/></Route>
                   <Route exact path="/contact"><Contact/></Route>
                   <Route exact path="/login"><Login/></Route>
                   <Route exact path="/signup"><Signup/></Route>
                   <Route exact path="/signup1"><Signup1/></Route>
                   <Route exact path="/donate"><Donate/></Route>
                   <Route exact path="/mission"><Mission/></Route>
                   <Route exact path="/support"><Help/></Route>
                   <Route exact path="/program"><Programs/></Route>
                   <Route exact path="/ngocontact"><Ngocontact/></Route>
                   <Route exact path="/Ngo"><NgoDash/></Route>
                   <Route exact path="/logout"><Logout/></Route>
                 
                   <Route exact path="/RequestMedicine"><RequestMedicine/></Route>
                   <Route exact path="/RequestedMedicine"><RequestedMedicine/></Route>
                   <Route exact path="/ShowNgo/:id"><ShowNgo/></Route>
                   <Route exact path="/Admin"><Admin/></Route>
                   <Route exact path="/AdminDonate"><AdminDonate/></Route>
                   <Route exact path="/AdminRequest"><AdminRequest/></Route>
                  
                  
                   </Switch>
                   </Routers> 
        </>
    )
}

export default Router
