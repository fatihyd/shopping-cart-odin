import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {
    const [cart, setCart] = React.useState([]);

    return (
        <>
            <Header cart={cart} />
            <div id="main">
                <Outlet context={[cart, setCart]} />
            </div>
        </>
    );
}
