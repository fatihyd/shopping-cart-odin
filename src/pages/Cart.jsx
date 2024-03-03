import React from "react"
import { useOutletContext } from "react-router-dom"

export default function Cart() {
    const [cart, setCart] = useOutletContext();
    console.log(cart);

    const totalPrice = cart.reduce((accumulator, cartItem) => {
        return accumulator + (parseInt(cartItem.quantity) * parseInt(cartItem.product.price))
    }, 0);

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
                        <h3>{cartItem.product.title}</h3>
                        <p>${cartItem.product.price * cartItem.quantity}</p>
                    </div>
                ))
            }
        </div>
    );
}
