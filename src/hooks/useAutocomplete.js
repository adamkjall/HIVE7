import { useState, useEffect } from 'react';

const useAutocomplete = query => {
  const [searchResults, setSearchResults] = useState(null);

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
    if (!query || query.length <= 2) return;

    fetch(
      `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.LOCATION_IQ_API_KEY}&q=${query}&bounded=1&countrycodes=SE&limit=5`
    )
      .then(res => res.json())
      .then(data => formatData(data))
      .then(data => setSearchResults(data))
      .catch(console.log);
  }, [query]);

  return [searchResults, clearResults];
};

export default useAutocomplete;
