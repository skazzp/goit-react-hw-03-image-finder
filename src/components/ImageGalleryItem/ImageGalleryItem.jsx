const ImageGalleryItem = ({ element }) => {
  console.log(element);
  const { webformatURL, tags } = element;
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
