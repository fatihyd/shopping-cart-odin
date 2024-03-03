import React from "react"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <h1>Layout goes here</h1>
            <Outlet />
        </>
    );
}
