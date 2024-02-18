import React from "react";

export default function FeaturedProduct(props) {
  return (
    <div className="card">
      <img className="product-image" src={props.url} alt="product image"/>
      <h2 className="name">{props.name}</h2>
      <p className="price">{props.price}</p>
      {/* <p className="description">{props.description}</p> */}
      <p>
        {/* <button>Read more</button> */}
      </p>
    </div>
  );
}
