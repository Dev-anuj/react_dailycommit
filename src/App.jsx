import React from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';
import Wish from './Wish';
//import {myname ,mychair, mybox , myshoes} from './Loop';
import Loop from './Loop';
import Cal from './Cal';
import Card from './Card';
import Action from './Action';
import Thriller from './Thriller';
import './index.css';
import Slotmachine from './Slotmachine'
import Match from './Match';

import Notmatch from './Notmatch';
import Hook from './Hook';

// const type="Action";




function App(){
    return (<>
    { /*
        <Heading />
        <Para />
        <List/>
        <Wish />
        <Loop />
        <Cal/>

        <h1 className="headtitle">List of top 6 movies of 2021</h1>
    
        <div className="row">
        {(type==="Action")? <Action />:<Thriller />}
        </div> 
          

          
       <h1 className="headtitle">🎰 Slot Machine 🎰</h1>
       <div className="ekbox">
       <div className="spacedown">
       <Slotmachine 
        x='😄'y='😄' z='😄'

        />
        </div>

        <div className="spacedown">
       <Slotmachine 
           x="🥭" y="🍌" z="🍎"
       />
       </div>
       <div className="spacedown">
       <Slotmachine 
           x='🎅'y='😄' z='😄'
       />
       </div>
       </div>

       */ }
     <div className='hookdesign'>
       <Hook 
       thing={0} />
      
      </div>      
  
        
        

    </>
    );
}
export default App;