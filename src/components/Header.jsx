import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <header>
            <i className="fa fa-shopping-cart" style={{ fontSize: '48px', color: 'red' }}></i>
            <nav>
                <NavLink to="/" style={({ isActive }) => isActive ? activeStyles : null}>Home</NavLink>
                <NavLink to="/store" style={({ isActive }) => isActive ? activeStyles : null}>Store</NavLink>
                <NavLink to="/cart" style={({ isActive }) => isActive ? activeStyles : null}>Cart</NavLink>
            </nav>
        </header>
    );
}