import React from "react"
/*
    * Make every card a link to /:id
*/
export default function ProductCard({ imageURL, title, price }) {
    return (
        <div className="product-card">
            <img src={imageURL} alt="image of the product" />
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    );
}