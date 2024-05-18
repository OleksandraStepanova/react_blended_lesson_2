import { getPhotos } from 'apiService/photos';
import { Form, Text, PhotosGallery } from 'components';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    if (!query) return;
    const handleGallery = async () => {
      const value = await getPhotos(query, page);
      setGallery(value.photos);
    };
    handleGallery();
  }, [query, page]);

  const getQuery = value => {
    setQuery(value);
  };

  return (
    <>
      <Form onSubmit={getQuery} />
      <PhotosGallery gallery={gallery} />
      {query === '' && <Text textAlign="center">Let`s begin search 🔎</Text>}

      <Toaster />
    </>
  );
};
