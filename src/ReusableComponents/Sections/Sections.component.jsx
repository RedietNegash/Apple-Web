import React from "react";
import "./Sections.styles.css"
import Footer from "../../Components/Footer/Footer.component";
const Section=({title,description,link1,link2,imageUrl,id,Textcolor,marginbottom})=>(
   <>
       <div className="text-wrapper ">
       
      <div className="backgroundImage" style={{backgroundImage:`url(${imageUrl})`
   
}}>

       <h2 className="product-title" style={{ color: `${Textcolor}` }}>{title}</h2>


       <h3 className="description" style={{color:`${Textcolor}`}}>{description}</h3>
       <div className="iphonetext-links-wrapper">
        <ul>
        <li> <a href="">{link1}</a></li>
        <li><a href="">{link2} </a></li>
        </ul>
       </div>
       </div>

       </div>

      
       </>
)
export default Section;
