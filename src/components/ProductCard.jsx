import React from "react"
import { Link } from "react-router-dom";

export default function ProductCard({ id, imageURL, title, price }) {
    return (
        <div className="product-card">
            <Link to={`./${id}`} >
                <img src={imageURL} alt="image of the product" />
                <h3>{title}</h3>
                <p>${price}</p>
            </Link>
        </div>
    );
}