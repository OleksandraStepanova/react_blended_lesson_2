import { GridItem } from '..';
import style from './PhotosGalleryItem.module.css';
export const PhotosGalleryItem = ({ galleryItem: { avg_color, src, alt } }) => {
  return (
    <GridItem>
      <div
        className={style.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};
