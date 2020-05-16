import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

import mapIcon from 'assets/icons/map-marker.svg';

import { StyledMap } from './style';

const OpenStreetMaps = ({ position }) => {
  const mapPosition = position || [57.71540989999999, 11.944813499999999];
  const icon = new Icon({
    iconUrl: mapIcon,
    iconAnchor: [30, 30], // point of the icon which will correspond to marker's location
    iconSize: [60, 60]
  });
  return (
    <StyledMap>
      <Map center={mapPosition} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapPosition} icon={icon} />
      </Map>
    </StyledMap>
  );
};

// <Marker position={position} icon={icon} />
export default OpenStreetMaps;
