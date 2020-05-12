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
    let latlong = position.coords.latitude + '/' + position.coords.longitude;
    console.log(latlong);

    if (latlong.length > 2) {
      setMapping(true);
      console.log(`https://www.openstreetmap.org/#map=16/` + latlong);
      setImgUrl(`https://www.openstreetmap.org/#map=16/` + latlong);
    }
  };

  return (
    <StyledMap>
      <button onClick={() => getLocation()}>Ange din Position</button>
      {mapping ? <img src={imgUrl} alt="karta" /> : null}
      {messege}
      <a href="https://www.openstreetmap.org/">
        <p className="openstreetmap">© OpenStreetMaps bidragsgivare ♥ Donera. </p>
      </a>
    </StyledMap>
  );
};
export default Map;
