import React, { useEffect, useState } from 'react';

const Useeffect=()=>{
    const[num , setNum]=useState(0);
    const[nums , setNums]=useState(0);

    useEffect(()=>{
        alert("hi");
    },[nums]);


    return(
        <>
        <div className="hookbox" style={{backgroundColor:"rgb(26, 19, 59)"}}>
        <button onClick={()=>{
            setNum(num+1);
           
        }}>click me {num}</button>
        <br/>
        <br/>
        <br/>
        <button onClick={()=>{
            setNums(nums+1);
           
        }}>click me {nums}</button>
        </div>
        </>
    );
}
export default Useeffect;