import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import Path from './Data/Path.json';
import L from 'leaflet';
import Field from './Data/Field.json';
import "leaflet/dist/leaflet.css";

export default function Map(props) {
    var LeafIcon = L.Icon.extend({
        options: {
            iconSize: [30, 30],
            shadowSize: [40, 40],
            iconAnchor: [22, 22],
            shadowAnchor: [22, 22],
            popupAnchor: [-3, -22]
        }
    });

    var SchoolIcon = new LeafIcon({
        iconUrl: 'https://xn--grmpi2023-r9a.sourcelab.ch/gruempimapicons/graduation-cap-icon.svg'
    })

    var BallIcon = new LeafIcon({
        iconUrl: 'https://xn--grmpi2023-r9a.sourcelab.ch/gruempimapicons/ball-football-icon.svg'
    })

    var BallIcon1 = new LeafIcon({
        iconUrl: 'https://xn--grmpi2023-r9a.sourcelab.ch/gruempimapicons/ball-football-icon1.svg'
    })

    var BallIcon2 = new LeafIcon({
        iconUrl: 'https://xn--grmpi2023-r9a.sourcelab.ch/gruempimapicons/ball-football-icon2.svg'
    })

    var BallIcon3 = new LeafIcon({
        iconUrl: 'https://xn--grmpi2023-r9a.sourcelab.ch/gruempimapicons/ball-football-icon3.svg'
    })

    var SpeakerIcon = new LeafIcon({
        iconUrl: 'https://xn--grmpi2023-r9a.sourcelab.ch/gruempimapicons/loudspeaker-icon.svg'
    })

    var SaniIcon = new LeafIcon({
        iconUrl: 'https://xn--grmpi2023-r9a.sourcelab.ch/gruempimapicons/band-bandage-icon.svg'
    })

    return (
        <MapContainer center={props.center}
            zoom={props.zoom}
            scrollWheelZoom={false}
            maxBounds={[[-90, -180], [90, 180]]}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                noWrap='true'
            />
            <GeoJSON data={Path.features} style={{ weight: 2, opacity: '100%', color: 'red' }} />
            <Marker
                icon={SchoolIcon}
                position={[47.534760423285974, 7.642263339527119]}>
                <Popup>FHNW</Popup>
            </Marker>
            {props.zoom < 18 &&
                <>
                    <Marker
                        icon={BallIcon}
                        position={[47.53353893503069, 7.639643315272735]}>
                        <Popup>Grümpi-Areal</Popup>
                    </Marker>
                </>
            }
            {props.zoom === 18 &&
                <>
                    <GeoJSON data={Field.features} style={{ weight: 2, opacity: '100%', color: 'green' }} />
                    <Marker
                        icon={SpeakerIcon}
                        position={[47.53361513323679, 7.63957640061264]}>
                        <Popup>Speakertisch</Popup>
                    </Marker>
                    <Marker
                        icon={SaniIcon}
                        position={[47.53365644515162, 7.639312177190305]}>
                        <Popup>Sanität</Popup>
                    </Marker>
                    <Marker
                        icon={BallIcon3}
                        position={[47.53328651456408, 7.639940750805408]}>
                        <Popup>Platz C</Popup>
                    </Marker>
                    <Marker
                        icon={BallIcon2}
                        position={[47.53335411628794, 7.639545806321593]}>
                        <Popup>Platz B</Popup>
                    </Marker>
                    <Marker
                        icon={BallIcon1}
                        position={[47.53344237396243, 7.6391007984532]}>
                        <Popup>Platz A</Popup>
                    </Marker>
                </>
            }
        </MapContainer>
    )
}