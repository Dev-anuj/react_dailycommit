import React from 'react';
import logo from './anuj.png';




const KeepHeader=()=>{

    return(<>
    
        <nav class=" bg-danger">
        <a class="navbar-brand" href="#">
            <img src={logo}  width="130" height="100" className="d-inline-block align-top" alt="Anuj Keep" />
           
        </a>
        </nav>
    


    </>);

}

export default KeepHeader;