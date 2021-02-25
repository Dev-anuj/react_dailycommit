import React, {useEffect, useState } from 'react';

const Titlechange =()=>{
    const[num , setNum]=useState(0);

    useEffect(()=>{
        document.title=`you clicke me ${num}`;
        
    },[num]);
    const Bdlo=()=>{
        setNum(num+1);

    };

    return (<>
    <button onClick={Bdlo}>click me {num}</button>

    </>);
}
export default Titlechange;