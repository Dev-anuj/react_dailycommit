import React, { useContext } from 'react';
import { FirstName , LastName } from './Contextapi';


const CompC =()=>{

    const fname=useContext(FirstName);
    const lname=useContext(LastName);
    return(
        <>


        <h1>my name is {fname} {lname}</h1>



         {/* <FirstName.Consumer> 
        
        {(fname)=>{
            return(
                <LastName.Consumer>
                    {(lname)=>{
                        return <h1>my name is {fname} {lname}</h1>;
                    }}
                </LastName.Consumer>
            );
            
        }}
        </FirstName.Consumer>  */}
       

        {/* <FirstName.Consumer> 
        
        {(fname)=>{
            return <h1>my name is {props.title} {fname}</h1>;
            
        }}
        </FirstName.Consumer>

        <LastName.Consumer>
                    {(lname)=>{
                        return <h1>my name is {lname}</h1>;
                    }}
         </LastName.Consumer> */}
        </>
    );

}
export default CompC;