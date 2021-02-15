import React, { useState } from 'react';
import './index';



const Hook =(props)=>{

    const State=useState;
    
    const[count,newvalueofcount]=useState(props.thing);

    const Inc=()=>{
        return(
        newvalueofcount(count+1)
        );
     
    }


    return(
        <>
        <div className="hookbox">
        <h1 className="hooktext">{count}</h1>
        <button className="hookbutton" onClick={Inc}>click</button>
        </div>
        </>
    );


}
export default Hook;