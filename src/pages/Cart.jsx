import React from "react"
import { useOutletContext } from "react-router-dom"

export default function Cart() {
    const [cart, setCart] = useOutletContext();
    console.log(cart);

    const totalPrice = cart.reduce((accumulator, cartItem) => {
        return accumulator + (parseInt(cartItem.quantity) * parseInt(cartItem.product.price))
    }, 0);

    function handleChange(e, id) {
        const updatedCart = cart.map((item) => {
            if (item.product.id === id) {
                return {
                    ...item,
                    quantity: e.target.value
                };
            } else {
                return item;
            }
        });

        setCart(updatedCart);
    }

    function handleRemove(id) {
        const updatedCart = cart.filter((item) => item.product.id !== id);

        setCart(updatedCart);
    }

    return (
        <div className="cart-container">
            <div className="cart-info">
                <p><strong>Total price: ${totalPrice}</strong></p>
                <button>Checkout</button>
            </div>
            {
                cart.map(cartItem => (
                    <div key={cartItem.product.id} className="cart-item">
                        <img src={cartItem.product.image} alt="image of the product" />
                        <div className="cart-item-detail">
                            <h3>{cartItem.product.title}</h3>
                            <p>${cartItem.product.price * cartItem.quantity}</p>
                            <input
                                type="number"
                                name="quantity"
                                min="1"
                                value={cartItem.quantity}
                                onChange={(e) => handleChange(e, cartItem.product.id)}
                            />
                            <button className="remove-item" onClick={() => handleRemove(cartItem.product.id)}><i className="fa fa-trash"></i></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
