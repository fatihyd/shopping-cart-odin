import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the store!</h1>
            <button>
                <Link to="store">Shop now</Link>
            </button>
        </div>
    );
}
