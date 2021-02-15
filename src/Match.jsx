import React from 'react';


function Match(props){
    let x= props.x;
    let y=props.y;
    let z=props.z;

   
    return  (
        <>
           <h1>{x}{y}{z}</h1>
            <h1>This is matching</h1>
        </>);

}
export default Match;