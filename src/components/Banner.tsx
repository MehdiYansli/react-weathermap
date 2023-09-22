import React from "react";
import "./Banner.css"

export const Banner = () => {
    return (
        <section className="banner">
            <div className="bannerLeft">
                <div className="content">
                    <h1>Simplon.co en Occitanie</h1>
                    <p>Simplon.co est un réseau de fabriques solidaires et inclusives qui proposent des formations gratuites aux métiers techniques du numérique en France et à l'étranger.</p>
                    <div className="content-button"><a href="#" className="traineeButton">formations ouvertes</a></div>
                </div>
            </div>

            <div className="bannerRight">
                <img className="bannerImg" src="./src/assets/bannerimg .jpg" alt="" />
            </div>
        </section>
    )
}