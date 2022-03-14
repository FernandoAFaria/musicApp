import { useState, useEffect } from 'react';
import { fetchArtist, fetchAlbums } from '../utils/itunesApi';

export default function useItunesApi(name) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAllData = async () => {
    try {
      const artistData = await fetchArtist(name);
      const albumData = await fetchAlbums(artistData.amgArtistId);
      setData(albumData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);
    fetchAllData();
  }, [name]);

  return { data, error, loading };
}
