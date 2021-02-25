import React, { useState } from 'react';
import KeepHeader from './KeepHeader';
import KeepFooter from './KeepFooter';
import KeepWrite from './KeepWrite';
import KeepShow from './KeepShow';

const Anujkeep=()=>{
  const[addIteam ,setAddItem]=useState([]);

  const addNote=(note)=>{

    setAddItem((preData)=>{
      return  [...preData, note];

    });
  };

  const deleteItem=(id)=>{

    setAddItem((older)=>
        older.filter((arrEle, index)=>{
            return index !== id;
        })
    )
};

    return(
        <>

      
        <KeepHeader />
        <KeepWrite 
          passNote={addNote}
        />
        
       {addIteam.map((val,index)=>{
          return ( <KeepShow
          Key={index}
          id={index}
          title={val.title}
          content={val.content}
          onselect={deleteItem}
          
           />
           );
        }
       )} 
       
      
        <KeepFooter />
          
        </>
    );

}

export default Anujkeep;