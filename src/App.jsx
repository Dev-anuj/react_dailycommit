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



function App(){
    return (<>
    
        <Heading />
        <Para />
        <List/>
        <Wish />
        <Loop />
        <Cal/>
    
        <div className="row">
           <Card imgsrc="https://i.pinimg.com/474x/64/6b/24/646b24208a3ba311a17abb675a1c0ca5.jpg"
            title="DAdd a comment within JSX you should use curly braces ({}) to start an expression and then within that you can write a block commen"
            cat="Action"
            link="https://www.google.com/search?q=dark+series&rlz=1C1CHBD_enIN800IN800&oq=dark+series&aqs=chrome..69i57j46i433l2j0i433j46i433j46j0j0i433l2j46i433.2481j0j7&sourceid=chrome&ie=UTF-8"
         />
           <Card imgsrc="https://i.pinimg.com/474x/64/6b/24/646b24208a3ba311a17abb675a1c0ca5.jpg"
            title="DARK To add a comment within JSX you should use curly braces ({}) to start an expression and then within that you can write a block commen"
            cat="Action"
            link="https://www.google.com/search?q=dark+series&rlz=1C1CHBD_enIN800IN800&oq=dark+series&aqs=chrome..69i57j46i433l2j0i433j46i433j46j0j0i433l2j46i433.2481j0j7&sourceid=chrome&ie=UTF-8"
         />
           <Card imgsrc="https://i.pinimg.com/474x/64/6b/24/646b24208a3ba311a17abb675a1c0ca5.jpg"
            title="DARK To add a comment within JSX you should use curly braces ({}) to start an expression and then within that you can write a block commen"
            cat="Action"
            link="https://www.google.com/search?q=dark+series&rlz=1C1CHBD_enIN800IN800&oq=dark+series&aqs=chrome..69i57j46i433l2j0i433j46i433j46j0j0i433l2j46i433.2481j0j7&sourceid=chrome&ie=UTF-8"
         />
  </div> 
        
        

    </>
    );
}
export default App;