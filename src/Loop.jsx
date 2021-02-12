import React from 'react';


function Loop(){

    const myname = "anuj sharma";
var mychair = "anurag ";
const mybox = "box ";

function myshoes(){
    let bol='aj';
  return  (bol);

}




return(
    <>
       <h1>{myname}</h1>
        <h1>{mychair}{mybox}</h1>
        <h1>{mybox} {myshoes()}</h1>
        </>
);


 
}



export default Loop;








// export default myname;
