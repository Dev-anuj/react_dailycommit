import React from 'react';
import Slotmachine from './Slotmachine'
function Notmatch(props){
    let x= props.x;
    let y=props.y;
    let z=props.z;

  
    return (
        <>
           <h1>{x}</h1>
            <h1> This not matching</h1>
    </>);

}
export default Notmatch;