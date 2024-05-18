import { getPhotos } from 'apiService/photos';
import { Form, Text, PhotosGallery, Button, Loader } from 'components';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const handleGallery = async () => {
      try {
        setIsLoading(true);
        const value = await getPhotos(query, page);
        setGallery(prevState => {
          return [...prevState, ...value.photos];
        });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleGallery();
  }, [query, page]);

  const getQuery = value => {
    setQuery(value);
    setGallery([]);
    setPage(1);
  };
  const onLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <Form onSubmit={getQuery} />
      <PhotosGallery gallery={gallery} />
      {query === '' && <Text textAlign="center">Let`s begin search 🔎</Text>}
      {gallery.length > 0 && <Button onClick={onLoadMore}>Load more</Button>}
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};
