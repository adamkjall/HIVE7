import { useState, useEffect } from 'react';

const useAutocomplete = query => {
  const [searchResults, setSearchResults] = useState(null);
  const maxLon = '13.63314608';
  const minLon = '10.95672120';
  const maxLat = '58.37892104';
  const minLat = '56.84951389';
  const viewbox = maxLon + ',' + maxLat + ',' + minLon + ',' + minLat;

  const formatData = data => {
    if (data && data.length) {
      return data.map(entry => ({
        address: entry.display_name,
        lat: entry.lat,
        lon: entry.lon
      }));
    }

    return searchResults;
  };

  const clearResults = () => setSearchResults(null);

  useEffect(() => {
    if (!query || query.length === 0) return;

    fetch(
      `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.LOCATION_IQ_API_KEY}&q=${query}&viewbox=${viewbox}&bounded=1&countrycodes=SE`
    )
      .then(res => res.json())
      .then(data => formatData(data))
      .then(data => setSearchResults(data))
      .catch(console.log);
  }, [query]);

  return [searchResults, clearResults];
};

export default useAutocomplete;
