import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledGoogleMap } from './style';

const GoogleMap = () => {
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
    let latlong = position.coords.latitude + ',' + position.coords.longitude;
    let api = 'hejhallo';
    if (latlong.length > 2) {
      setMapping(true);

      setImgUrl(
        'https://maps.googleapis.com/maps/api/staticmap?center=+' +
          latlong +
          '+&zoom=14&size=400x300&sensor=false&key=AIzaSyAr7FnSuYSV435K8DSap32MlKg6fF4cmTIä' +
          api
      );
    }
  };

  return (
    <StyledGoogleMap>
      <button onClick={() => getLocation()}>Ange din Position</button>
      {mapping ? console.log(imgUrl) : null}
      {messege}
      <Link to="/create"></Link>
    </StyledGoogleMap>
  );
};
export default GoogleMap;
