import React from "react";
import "./Main.css"
import { Map } from "./Map";

export const Main = () => {
    return (
        <section className="main">
            <h1>Simplon près de chez vous</h1>
            <Map />
        </section>
    )
}