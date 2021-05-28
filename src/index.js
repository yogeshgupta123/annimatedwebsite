import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import "./index.css";
import Sdata from './Sdata';
   
// console.log(Sdata[0].sname);
// function ncard(val){
//     console.log(val);

// }

ReactDOM.render(
    <>

<h1 className = "heading_style"> List of top 3 Hotstar movie in 2021</h1>

   { Sdata.map( (val) => {

    return(
    <Card

        imgsrc = {val.img}
        title = {val.titlr}
        Sname = {val.snames}
        Link = {val.links}
    /> 
);
   })}

     </>
    , document.getElementById('root')
);