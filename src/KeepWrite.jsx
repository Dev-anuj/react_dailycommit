
import React,  { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


const KeepWrite=(props)=>{

    const[note,setNote]=useState({
        title:"",
        content:"",
    });
   
    const inputEvent=(event)=>{

        const value =event.target.value;
        const name =event.target.name;
        // const {name , value}=event.target;

        setNote((preData)=>{
            return {
                ...preData,
                [name]:value,
            };
        });

    };
  
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
      
       
    };

    return(<>

    <div className="keepwritebox">
        <input value={note.title} name="title"  onChange={inputEvent} placeholder="title"></input>
        <br></br>
        <br/>
       <textarea value={note.content} name="content"  onChange={inputEvent}  placeholder="write here"></textarea>
       <br></br>
       <Button onClick={addEvent}><AddIcon/></Button>
    </div>
    </>);

}

export default KeepWrite;