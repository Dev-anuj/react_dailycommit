import React from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';
import Wish from './Wish';
//import {myname ,mychair, mybox , myshoes} from './Loop';
import Loop from './Loop';
import Cal from './Cal';
import Card from './Card';
import './index.css';

import Action from './Action';
import Thriller from './Thriller';


const type="Thriller";







function App(){
    return (<>
    { /*
        <Heading />
        <Para />
        <List/>
        <Wish />
        <Loop />
        <Cal/>
       */ }

       {}

       <h1 className="headtitle">List of top 6 movies of 2021</h1>
    
        <div className="row">
        {(type==="Action")? <Action />:<Thriller />}
          

      
           
  </div> 
        
        

    </>
    );
}
export default App;