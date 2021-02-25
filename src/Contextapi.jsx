import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();

const Contextapi =()=>{

   

    
    return(
        <>
        <FirstName.Provider value="anuj">
        <LastName.Provider value="sharma">
         <CompA />
         </LastName.Provider>
         </FirstName.Provider>
        
        </>
    );

}
export default Contextapi;
export { FirstName ,LastName } ;