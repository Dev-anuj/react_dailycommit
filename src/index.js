import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const curtime = new Date().getHours();

let wish = '';
let cssstyle = {
  
};

let hiicss ={
color: 'rgb(104, 110, 190)'
};

if(curtime >=1 && curtime <12){
 wish ='Good morning';
 cssstyle.color ='green';
} 
else if(curtime >=12 && curtime <=17 ){
  wish ='Good evening';
  cssstyle.color ='orange';
} 
else if(curtime >=18 && curtime <=24){
wish='Good night'
cssstyle.color ='black';
}

ReactDOM.render(
  <h1 className="centerit"> <span style={hiicss}>Hello sir ,</span> <span style={cssstyle}> {wish} </span> </h1>
  ,document.getElementById("root")
);