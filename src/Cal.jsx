import React from 'react';
import add , {sub,mul,div} from './Operation';

function Cal(){
    return(
        <>
            <h1>sum of two no . is {add(10,2)}</h1>
        <h1>sum of two no . is {sub(10,2)}</h1>
        <h1>sum of two no . is {mul(10,2)}</h1>
        <h1>sum of two no . is {div(20,3)}</h1>

        </>
    );
}

export default Cal;
