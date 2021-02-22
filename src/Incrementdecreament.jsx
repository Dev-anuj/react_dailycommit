import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

const Incrementdecreament =()=>{
    var kam;

    const[initialValue , setInitialValue]=useState(0);
    const[user, setUser]=useState();
    const Increment=()=>{

      

        if(initialValue<10){
            setInitialValue( initialValue+1);
        }
        else {
                setInitialValue(10);

                var z= prompt(" !! Dont go beyound 10 , To proceed say ok below:");
                setUser(z);
                var kam= document.getElementById("p1").innerHTML = "User agreed 😄 and said : " ;
               

               
    
        }
    };

    const Decrement=()=>{

        
        if(initialValue>0){
            setInitialValue( initialValue-1);
        }
        else {
            setInitialValue(0);
        
            var z= prompt(" !! Dont go beyound 0 , To proceed say ok below:");
            setUser(z);
            var kam= document.getElementById("p1").innerHTML = "User agreed 😄 and said : ";
           
        }


    };
    
    


    return (<>
        <div className="hookbox">
            <h1 className="todohead">{initialValue}</h1>
            <Button className="buttonofincreament" onClick={Increment}><AddIcon /> </Button>  <Button className="buttonofde" onClick={Decrement}><RemoveIcon /></Button>
            <h1 id="p1" style={{color:"rgb(107, 45, 165)" , paddingTop :"30px"}}>{kam}{user}</h1>
        </div>
        
    </>);

};
export default Incrementdecreament;