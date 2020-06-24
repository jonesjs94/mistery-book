import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Muestra() {
    return (
        <div>
        <h1>Receta Page</h1>
            <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/receta">Muestra</Link>
                </li>
                <li>
                    <Link to="/favoritos">Favoritos</Link>
                </li>
            </ul>
            </Router>
        </div>
    )
}