import { PhotosGalleryItem } from '..';
import { Grid } from '../Grid/Grid';

export const PhotosGallery = ({ gallery }) => {
  console.log(gallery);
  return (
    <Grid>
      {gallery.map(galleryItem => (
        <PhotosGalleryItem key={galleryItem.id} galleryItem={galleryItem} />
      ))}
    </Grid>
  );
};
