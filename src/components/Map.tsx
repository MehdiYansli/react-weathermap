import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './Map.css';
import data from '../data/simplon.json';
import { FactoriesList } from "./Factories";
import FactoryType from "../models/Factory";
import { Factory } from "./Factory";
import Weather from "./Weather";


export const Map = () => {
    const [factory, setFactory] = useState<FactoryType | null>(null);


    return (
        <div className="simplon">

            <Factory factory={factory} />
            <MapContainer className="map" center={[46.2, 2.2]} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.factories.map(factory =>
                        <Marker
                            key={factory.factoryId}
                            position={[factory.lat, factory.lng]}
                            eventHandlers={{
                                popupopen: () => setFactory(factory),
                            }}
                        >
                            <Popup>
                                <Weather lat={factory.lat} lng={factory.lng} apiKey={import.meta.env.VITE_WEATHER_API_KEY} />
                            </Popup>
                        </Marker>
                    )
                }
            </MapContainer>

        </div>
    )
}