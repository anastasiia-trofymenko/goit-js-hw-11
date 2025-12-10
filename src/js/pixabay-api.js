const API_KEY = '53655759-0bde0e69f13e467ced1016ab6';

function searchImages(query) {
  const searchPhotos = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchPhotos}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default searchImages;
