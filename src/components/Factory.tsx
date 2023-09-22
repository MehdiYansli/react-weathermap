import React from "react";
import './Factory.css';
import FactoryType from "../models/Factory";
import {MdLocationOn} from 'react-icons/md';


type FactoryProps = {
    factory: FactoryType | null;
  };

export const Factory = ({factory}: FactoryProps) => {
    console.log(factory)
    return (       
                <div className="infos">
                    <div className="infos_factory">
                        <h2>{factory!= null ? factory.factoryName : 'Simplon.co'}</h2>
                        <div className="localisation"><span className="localisationIcon"><MdLocationOn /></span><p>{
                            factory!= null ? `${factory.address}, ${factory.departement} ${factory.regionName}, ${factory.countryName}` : ''}</p></div>
                        <p className="informations">Informations</p>
                    </div>
                </div>
            )
    }