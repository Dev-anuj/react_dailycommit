import React, { useState } from 'react';

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
                var kam= document.getElementById("p1").innerHTML = "User agreed 😄 and said : ";
               
    
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
            <button className="buttonofincreament" onClick={Increment}>Increment</button>  <button className="buttonofincreament" onClick={Decrement}>Decrement</button>
            <h1 id="p1" style={{color:"rgb(107, 45, 165)" , paddingTop :"30px"}}>{kam}{user}</h1>
        </div>
    </>);

};
export default Incrementdecreament;