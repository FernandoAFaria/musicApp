const options = {
  method: 'GET',
};
export const fetchArtist = async (name) => {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURI(name)}&entity=allArtist`, options);
    const jsonData = await response.json();
    return jsonData?.results[0] || null;
  } catch (err) {
    return { error: err };
  }
};

export const fetchAlbums = async (artistID) => {
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?amgArtistId=${artistID}&entity=album&limit=100`, options);
    const jsonData = await response.json();
    return jsonData.results.filter((entry) => entry.wrapperType === 'collection').sort((a, b) => (a.releaseDate < b.releaseDate ? 1 : -1));
  } catch (err) {
    return { error: err };
  }
};
