import React from "react"
import ProductCard from "../components/ProductCard"

export default function Store() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(
                json.filter(product => product.category.includes('clothing'))
            ))
    }, []);

    return (
        <>
            <div className="products-container">
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            imageURL={product.image}
                            title={product.title.split(' ').slice(0, 3).join(' ')}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </>
    );
}
