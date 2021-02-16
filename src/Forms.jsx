import React, { useState } from 'react';
import './index.css'

const Forms=()=>{


    const [old,now]=useState("");

    const [whensubmit,setfullname]=useState("");

    const inputEvent=(event)=>{
        
        now(event.target.value);
    }

    const onSubmit=()=>{
        setfullname(old);
    }

    return(
        <>
    <div className='bluebackground'>

    <h1>Hello 👋 {whensubmit} </h1>
    <input  className="inputspace" typet="text" placeholder="Enter name here" onChange={inputEvent} value={old}></input>
    <button className="buttonofform" onClick={onSubmit}>Click me</button>

    </div>
    </>
    );

}
export default Forms;