import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import "./index.css"
import Seriesdata from "./Seriesdata";

function mycard(val)
{
    return(
     <Card 
        key={value.id)
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}  
        />
    );
}

ReactDom.render(
    <>
    <h1 className="heading_style">Favourites webSeries </h1>
     {Seriesdata.map(mycard)}
    </>,
     document.getElementById("root")
);
