import React from "react";
import "./Cards.css";
import one from "../../assets/slider/one.png";
import two from "../../assets/slider/two.png";
import three from "../../assets/slider/three.png";
import four from "../../assets/slider/four.png";

const Cards = () => {
  const data = [
    {
      id: 1, // Unique identifier for each item
      title: "Premium",
      description: "Premium Gadgets collections",
      img: one,
    },
    {
      id: 2,
      title: "Classic",
      description: "Classic collections",
      img: two,
    },
    {
      id: 3,
      title: "Headsets",
      description: "Speakers and VR collections",
      img: three,
    },
    {
      id: 4,
      title: "Wireless",
      description: "Portable devices",
      img: four,
    },
  ];

  return (
    <div className="card-container">
      <div className="heading">
      <h1 >Services</h1>
      </div>
      <div className="cards">
        {data.map((item) => (
          <div key={item.id} className="card">
            <div className="image">
              <img src={item.img} alt="A beautiful scene" />
            </div>
            <div className="title">
              <h2>{item.title}</h2>
            </div>
            <div className="description">
              <p>{item.description}</p>
              <button>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
