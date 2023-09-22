import React from "react";
import "./Header.css"
import {BiSolidInfoCircle} from 'react-icons/bi'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {IoIosArrowDown} from 'react-icons/io'

export const Header = () => {
    return (
<div className="header">
  <div className="socialTopBar">
        <div className="info"><div className="infoIcon"><BiSolidInfoCircle /></div><p>simplon.co</p></div>
        <div className="socialMedia"><TiSocialTwitterCircular /><TiSocialLinkedinCircular /><TiSocialFacebookCircular /></div>
  </div>
        <hr />
  <nav className="navbar">
        <img src="./src/assets/logoSimplon.png" alt="logo-simplon" className="logo" />
        <div className="menu">
            <p className="dropDown">vous voulez <span className="dropDownIcon"><IoIosArrowDown /></span></p>
            <p className="navSection">welcome</p>
            <p className="navSection">nos actualités</p>
        </div>
  </nav>
</div>
    )
}