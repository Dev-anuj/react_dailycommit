// import React, { useState } from 'react';
// import './index.css'

// const Forms=()=>{


//     const [firstname,setfistname]=useState("");
    
//     const [lastname,setlastname]=useState("");

//     const [showfirstname,setshowfirstname]=useState("");
//     const [showlastname,setshowlastname]=useState("");

//     const inputEventOne=(event)=>{
        
//         setfistname(event.target.value);
//     }
//     const inputEventTwo=(event)=>{
        
//         setlastname(event.target.value);
//     }


//     const onSubmit=()=>{
        
//         setshowfirstname(firstname);
//         setshowlastname(lastname);
//     }

     

//     return(
//         <>
//     <div className='bluebackground'>

//     <h1>Hello 👋 {showfirstname}  {showlastname}</h1>
//     <input  className="inputspace" typet="text" placeholder="Enter name first name here" onChange={inputEventOne} value={firstname}></input>
//      <input  className="inputspace" typet="text" placeholder="Enter name last here" onChange={inputEventTwo} value={lastname}></input> 
//     <button className="buttonofform" onClick={onSubmit}>Click me</button>

//     </div>
//     </>
//     );

// }
// export default Forms;




import React, { useState } from 'react';
import './index.css'

const Forms=()=>{


    const [fullname,setFullName]=useState({
        fname:"",
        lname:"",
        email:"",
    });

    const [display,setDisplay]=useState("");
    


    const inputEvent=(event)=>{
        
      
        const value = event.target.value;
        const name = event.target.name;
        
        
        setFullName( (pre)=>{

            // console.log(preValue);
            if(name==="fname"){
                return{
               fname:value,
               lname:pre.lname,
               email:pre.email,
               
               
                };
            }
             else if(name==="lname"){
                return{
               fname:pre.fname,
               lname:value,
               email:pre.email,
                };
            }
            else if(name==="email"){
                return{
               fname:pre.fname,
               lname:pre.lname,
               email:value,
                };
            }
            

        } );

        
    }

   

    const onSubmit=(event)=>{
        event.preventDefault();
       
        setDisplay(`${fullname.fname} ${fullname.lname} ${fullname.email}`);

        
        
      
       
    }

     

    return(
        <>
        <form onSubmit={onSubmit}>
    <div className='bluebackground'>

    <h1>Hello 👋</h1>
    <input  className="inputspace" typet="text" placeholder="Enter name first name here" name="fname" onChange={inputEvent}
    //  value={fullname.fname}
     ></input>

     <input  className="inputspace" typet="text" placeholder="Enter name last here" name="lname" onChange={inputEvent}
    //   value={fullname.lname}
      ></input> 
      
     <input  className="inputspace" typet="email" placeholder="Enter name last here" name="email" onChange={inputEvent}
    //   value={fullname.lname}
      ></input> 
    <button className="buttonofform" >Click me</button>

    </div>
    </form>

    <div className="pararesult"><p>Results : 👉 {display} </p> </div> 
    </>
    );

}
export default Forms;