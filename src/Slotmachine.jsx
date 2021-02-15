import React from 'react';



function Slotmachine(props){
    
    let x= props.x;
    let y=props.y;
    let z=props.z;

    
    
    if(props.x===props.y && props.y===props.z){
        return  (
            <>
              
                <h1>{x}{y}{z}</h1>
                <h1>This is matching</h1>
                
            </>);
    }
    else{
        return (
            <>
                <h1>{x}{y}{z}</h1>
                <h1> This not matching</h1>
        </>);
    }



}
export default Slotmachine;