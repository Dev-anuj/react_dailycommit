import React from 'react';

const Todolist=(props)=>{

   
    return (
        <>
        <li className="itemvalue"><i className="fa fa-times-circle fonta" aria-hidden="true"
         onClick={()=>{
             props.onselect(props.id);
         }}
         ></i>{props.text} </li>
    
    </>
    ) ;

}

export default Todolist;