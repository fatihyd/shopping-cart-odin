import React from "react";
import { useParams } from "react-router-dom";

/*
    * get the quantity from the "form"
    * add it to the cart, keep it updated
*/

export default function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = React.useState({});

    React.useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json);
            });
    }, []);

    return (
        <div className="product-detail">
            <img src={product.image} alt="image of the product" />
            <div className="product-detail-detail">
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>
                    <i className="fa fa-star" style={{ color: '#f8cc2c', fontSize: '24px' }}></i>
                    <strong>{product.rating && product.rating.rate}</strong>/10
                </p>
                <input type="number" name="quantity" defaultValue={1} min="1" />
                <button>Add to cart</button>
            </div>
            <div className="product-detail-description">
                <strong>Description:</strong>
                <br />
                {product.description}
            </div>
        </div>
    );
}
