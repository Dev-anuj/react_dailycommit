import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies=()=>{
    const[num,setNum]=useState("");
    const[epi,setEpi]=useState("");
    const[tv,setTv]=useState("");
    const[img,setImg]=useState();
    const[title,setTitle]=useState();
    const[year,setYear]=useState();
    const[rating,setRating]=useState();
    const[nf,setNf]=useState();

   const valueTaker=(event)=>{
     setNum(event.target.value);
    
   };
   const epiTaker=(event)=>{
   
    setEpi(event.target.value);
  };
  const tvTaker=(event)=>{
   
    setTv(event.target.value);
  };
  
 

   useEffect(()=>{
      
       const season =`&Season=${num}`;
       const Episode=`&Episode=${epi}`;
       var Name=`${tv}`;
      
    
       async function getData(){
           const res= await axios.get(`http://www.omdbapi.com/?t=${Name}${season}${Episode}&apikey=9d52acb0`);
           console.log(res);
           setTitle(res.data.Title);
        
           setYear(res.data.Year);
           setRating(res.data.imdbRating);
           setImg(res.data.Poster);
           setNf(res.data.Error);

       }
       getData();
   });

    return(<>

            <div className="hookdesign hookbox">
           
            <h1>select Movie name</h1>
          

            <input value={tv} onChange={tvTaker} placeholder="write here"/>
            <br></br>
            
            <h1>select season</h1>
            <select value={num} onChange={valueTaker} >
            <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>

            </select>
            <br></br>

            <h1>select Episode</h1>
            
            <select value={epi} onChange={epiTaker} >
            <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="19">19</option>
            </select>

           
             
            </div>
            <div className="hookdesign" style={{color:"white"}}>
            <img src={img}  height="200" width="200"></img> 
                <h1>{title}</h1>
                <h2>{year}</h2>
                <h3>{rating}</h3>
                <h4>{nf}</h4>
            </div>

          </>);
}

export default Movies;