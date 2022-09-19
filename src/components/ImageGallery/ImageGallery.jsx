import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data }) => {
  return (
    <ul className="gallery">
      {data.map(elem => {
        return <ImageGalleryItem key={elem.id} element={elem} />;
      })}
    </ul>
  );
};

export default ImageGallery;
