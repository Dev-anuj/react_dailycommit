import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const KeepShow=(props)=>{

    return(<>
    <div className="keepwriteboxi">
    <h1>{props.title}</h1>
    <br/>
    <p>{props.content}</p>
    <Button onClick={()=>{
             props.onselect(props.id);
         }}
         > <DeleteIcon/> </Button> 
    </div>

    
    </>);

}

export default KeepShow;