import React from "react";
import Nav from "../../Components/Nav/Nav.component";
import "./Parts.style.css";
import Section from "../Sections/Sections.component";
import Footer from "../../Components/Footer/Footer.component";
class Parts extends React.Component {
  constructor() {
    super();
    this.state = {
      part: [
        {
          id: 1,
          title: "iPhone 14 Pro",
          description: "Pro.Beyond.",
          link1: "Learn more",
          link2: "Buy",
          imageUrl: "../../src/assets/Images/iphone-pro-ls.jpg",
        },
        {
          id: 2,
          title: "iPhone 14",
          description: "Big and bigger",
          link1: "Learn more",
          link2: "Buy",
          imageUrl: "../../src/assets/Images/iphone-14-large.jpg",
          Textcolor:"black",
        },
        {
          id: 3,
          title: "Creativity and Community. Woven together",
          description: "Explore the new Black Unity watch band and matching face.",
          link1: "Learn more",
          link2: "Buy",
          imageUrl:"../../src/assets/Images/creativity-large.jpg"
        },
        {
          id: 4,
          title: "WATCH",
          description:
            "A healthy leap ahead",
          link1: "Learn more",
          link2: "Buy",
          imageUrl:"../../src/assets/Images/watch_large.jpg"
        },
        {
          id: 5,
          title: "iPad",
          description: "Loveable. Drawable Magical",
          link1: "Learn more",
          link2: "Buy",
          imageUrl:"../../src/assets/Images/ipad_large.jpg",
          Textcolor:"black",
        },
        {
          id: 6,
          title: "MacBook Pro",
          description: "Supercharged by M2 Pro and M2 Max.",
          link1: "Learn more",
          link2: "Buy",
          imageUrl:"../../src/assets/Images/mbp__large.jpg"
        },
        {
          id: 7,
          title: "HomePod.",
          description: "Profound sound",
          link1: "Learn more",
          link2:"Buy",
          imageUrl:"../../src/assets/Images/homepod_large.jpg"
        },
        {
          id: 8,
          title: "AirPods Pro",
          description: "Rebuilt from the sound up.",
          link1: "Learn more",
          link2: "Buy",
          imageUrl:"../../src/assets/Images/airpods_pro_large.jpg",
          },
        {
            id: 9,
            title: "Card",
            description: "Get up to 3% Daily Cash back with every purchase",
            link1: "Learn more",
            link2: "Apply now",
            imageUrl:"../../src/assets/Images/card_large.jpg",
            Textcolor:"black",
             },
      ],
    };
  }

  render() {
    return (
     
      <div className="section-wrapper ">
        
          {this.state.part.map(({ id, title, description, link1, link2, imageUrl,Textcolor,marginbottom}) => (
            <div className={`text-wrapper ${this.state.part[3].id <= id ? "flex-wrapper" : "inhert"}`}>
            <Section

              key={id}
              title={title}
              description={description}
              link1={link1}
              link2={link2}
              imageUrl={imageUrl}
              Textcolor={Textcolor}
              marginbottom={marginbottom}
             
            />
             </div>
          ))}

       
      </div>


      
      
      
    
    );
  }
  
}

export default Parts;
