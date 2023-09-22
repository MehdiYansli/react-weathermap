import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
    <footer className='footer'>
            <div className="footer_logo">
                <img src="./src/assets/logo-footer.svg" alt="logo-simplon"/>
            </div>

            <div className="footer_link">
                <a href="">| Mentions légales |</a>
                <a href=""> Nos actualités |</a>
                <a href=""> Nous rejoindre |</a>
                <a href=""> Contact |</a>
                <a href=""> Presse |</a>
                <a href=""> Plan du site |</a>
                <a href=""> Notre agence numérique |</a>
            </div>
    </footer>
    )
}