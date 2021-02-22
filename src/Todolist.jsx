import React , { useState } from 'react';

const Todolist=(props)=>{
const [line , setLine ]=useState(false)
    const cutIt=()=>{
       setLine(true);
    }
   
    return (
        <>
        <li style={{textDecoration: line ? "line-through red":"none" }} className="itemvalue" ><i className="fa fa-times-circle fonta" aria-hidden="true"  onClick={cutIt} ></i>{props.text} </li>
    
    </>
    ) ;

}

export default Todolist;