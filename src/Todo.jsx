import React, { useState } from 'react';
import Todolist from './Todolist';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Todo=()=>{

    const[data,setData]=useState();
    const[display, setDisplay]=useState([]);

    const inputElement=(event)=>{

        setData(event.target.value);

    };
    const whenclick=()=>{
        setDisplay((older)=>{
            return[...older,data];
        });
        setData("");

    };

    const deleteItem=(id)=>{
       
        setDisplay((older)=>{
            return older.filter((arrEle, index)=>{
                return index!==id;
            })
        })
    };

    const keyPressed=(event)=> {
        if (event.key === "Enter") {
         whenclick();
        }
      };
        
    return(
        <>
        <div className="todobox">
        <br></br>
           <h3 className="todohead">To Do app</h3>
            <br></br>
            <div className="todoinside">
                <TextField id="outlined-basic" className="todoinput" style={{marginLeft:"20%"}} onKeyPress={keyPressed} onChange={inputElement} name="additem" value={data} label="Enter Item" />
                <Button  onClick={whenclick}><AddIcon/></Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <ol>
               {
                   display.map((itemvalue ,index)=>{
                     return <Todolist 
                          text={itemvalue}
                            key={index}
                            id={index}
                          onselect={deleteItem}
                            />
                   })
               }
           </ol>
            </div>
            
        </div>
      
        
        </>
    );
}
export default Todo;