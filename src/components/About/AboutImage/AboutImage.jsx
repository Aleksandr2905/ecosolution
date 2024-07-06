import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  aboutImageOneAdaptive,
  aboutImageTwoAdaptive,
} from '../../../data/about';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import * as s from './AboutImage.styled';

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
    <li>
      <picture>
        <source
          srcSet={`${selectedImage.oneX} 1x, ${selectedImage.twoX} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${selectedImage.oneX} 1x, ${selectedImage.twoX} 2x`}
          type="image/jpeg"
        />
        <s.Image
          src={selectedImage.oneX}
          alt={alt}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </picture>
    </li>
  ) : null;
};

AboutImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AboutImage;
