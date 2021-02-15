import React from 'react';
import Sdata from './Sdata';
import Card from './Card'
import Notmatch from './Notmatch';

const Action=()=>{

    return (
        <>
        <Card
            Key={Sdata[0].id}
            imgsrc={Sdata[0].imgsrc}
            title={Sdata[0].title}
            cat={Sdata[0].cat}
            link={Sdata[0].link}
        />
        <Card
            Key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            cat={Sdata[1].cat}
            link={Sdata[1].link}
        />
        <Card
            Key={Sdata[2].id}
            imgsrc={Sdata[2].imgsrc}
            title={Sdata[2].title}
            cat={Sdata[2].cat}
            link={Sdata[2].link}
        />

        </>
    );

}

export default Action;