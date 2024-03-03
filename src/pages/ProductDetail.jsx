import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function ProductDetail() {
    const params = useParams();
    const [cart, setCart] = useOutletContext();
    const [product, setProduct] = React.useState({});
    const [quantity, setQuantity] = React.useState(0);

    React.useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        setCart(prevCart => [
            ...prevCart,
            {
                product: product,
                quantity: quantity
            }
        ]);
    }

    function handleChange(e) {
        setQuantity(e.target.value);
    }

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
                <form onSubmit={handleSubmit}>
                    <input type="number" name="quantity" min="1" value={quantity} onChange={handleChange} />
                    <button>Add to cart</button>
                </form>
            </div>
            <div className="product-detail-description">
                <strong>Description:</strong>
                <br />
                {product.description}
            </div>
        </div>
    );
}
