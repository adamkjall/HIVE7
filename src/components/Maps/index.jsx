import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledMap } from './style';

const Map = () => {
  const [messege, setMessege] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [mapping, setMapping] = useState(false);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setMessege('Geolocation is not supported by this browser');
    }
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setMessege('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        setMessege('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        setMessege('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        setMessege('An unknown error occurred.');
        break;
    }
  }

  const showPosition = position => {
    const latlong = position.coords.latitude + '/' + position.coords.longitude;
    console.log(latlong);

    if (latlong.length > 2) {
      console.log(`https://www.openstreetmap.org/#map=16/` + latlong);
      setImgUrl(`https://www.openstreetmap.org/#map=16/` + latlong);
      setMapping(true);
    }
  };

  return (
    <StyledMap>
      <div onClick={() => getLocation()} className="position">
        Ange din Position
      </div>
      <div className="map">
        {mapping && <img src={imgUrl} alt="karta" />}
        {messege}
        {mapping && (
          <a href={imgUrl}>
            <p className="openstreetmap">© OpenStreetMaps bidragsgivare ♥ Donera. </p>
          </a>
        )}
      </div>
    </StyledMap>
  );
};
export default Map;
