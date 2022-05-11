import React from 'react'
import { useHistory} from 'react-router-dom';


const Logout = () => {
    localStorage.clear()
let history=useHistory();
history.push("/");
    return (
        <div>
            
        </div>
    )
}

export default Logout
