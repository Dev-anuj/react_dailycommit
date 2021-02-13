import React from 'react';
import Sdata from './Sdata';
import Card from './Card'

const Action=()=>{

    return (
        <>
        <Card
            Key={Sdata[3].id}
            imgsrc={Sdata[3].imgsrc}
            title={Sdata[3].title}
            cat={Sdata[3].cat}
            link={Sdata[3].link}
        />
        <Card
            Key={Sdata[4].id}
            imgsrc={Sdata[4].imgsrc}
            title={Sdata[4].title}
            cat={Sdata[4].cat}
            link={Sdata[4].link}
        />
        <Card
            Key={Sdata[5].id}
            imgsrc={Sdata[5].imgsrc}
            title={Sdata[5].title}
            cat={Sdata[5].cat}
            link={Sdata[5].link}
        />

        </>
    );

}

export default Action;