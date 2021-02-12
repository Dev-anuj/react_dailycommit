import React from 'react';
import './index.css';





function Wish(){
  
          const curtime = new Date().getHours();

          let wish = '';

          let cssstyle = {
            color :'red'
          };

          
          if(curtime >=1 && curtime <12){
          wish ='Good morning';
          cssstyle.color ='green';
          } 
          else if(curtime >=12 && curtime <=17 ){
            wish ='Good Afternoon';
            cssstyle.color ='orange';
          } 
          else if(curtime >=18 && curtime <=24){
          wish='Good night'
          cssstyle.color ='black';
          }

    return(
        <>
             <h1 className="centerit"> <span style={{color:"red"}}>Hello sir ,</span> <span style={cssstyle}> {wish} </span> </h1>
        </>
        
           );


}
export default Wish;