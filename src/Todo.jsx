import React, { useState } from 'react';
import Todolist from './Todolist';

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





    return(
        <>
        <div className="todobox">
        <br></br>
           <h3 className="todohead">To Do app</h3>
            <br></br>
            <div className="todoinside">
                <input className="todoinput" onChange={inputElement} name="additem" value={data} placeholder="add item"></input>
                <button className="todobutton" onClick={whenclick}>+</button>
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