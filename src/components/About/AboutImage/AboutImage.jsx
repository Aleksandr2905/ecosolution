import { useEffect, useState } from 'react';
import {
  aboutImageOneAdaptive,
  aboutImageTwoAdaptive,
} from '../../../data/about';
import { useScreenWidth } from '../../../hooks/useScreenWidth';

const AboutImage = ({ image, alt }) => {
  const screenWidth = useScreenWidth();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const imageData =
      image === 'imageOne'
        ? aboutImageOneAdaptive[screenWidth]
        : aboutImageTwoAdaptive[screenWidth];
    setSelectedImage(imageData);
  }, [screenWidth, image]);

  return selectedImage ? (
    <picture>
      <source
        srcSet={`${selectedImage.oneX} 1x, ${selectedImage.twoX} 2x`}
        type="image/webp"
      />
      <source
        srcSet={`${selectedImage.oneX} 1x, ${selectedImage.twoX} 2x`}
        type="image/jpeg"
      />
      <img src={selectedImage.oneX} alt={alt} width="100%" height="100%" />
    </picture>
  ) : null;
};

export default AboutImage;
