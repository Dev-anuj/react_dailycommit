import React, { useState } from 'react';
import './index.css'

const Uionclick=()=>{

    

   var buttonname="click me";
   var colorold="#0099cc ";
    const State=useState;
    const [bg,setbg]=useState(colorold);
    const [oldname,newname]=useState(buttonname);

    
    const backttohome=()=>{

        setbg(colorold="white");
        newname(buttonname="Refresh again to go 🏠"  );
        
       
      
        
    }
    
    const bgChange=()=>{

        setbg(colorold="red");
        newname(buttonname="Single Click 😚 " );
        setInterval(backttohome,3000);
        
    }


     const secoundClick=()=>{
         setbg(colorold="yellow");
         newname(buttonname="Double click 😠" );
        
     }
    return(
        <>
        <div className="bluebackground" style={{backgroundColor:bg ,width:'30%',padding:'100px',margin:'auto',}}>
        <button className="clickbutton" onClick={bgChange} onDoubleClick={secoundClick} >{oldname}</button>
        </div>
        </>
    );

}
export default Uionclick;