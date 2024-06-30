export const generateImagePathsSlider = (number, format) => {
  return {
    oneX: `/images/slides/slide-${number}@1x.${format}`,
    twoX: `/images/slides/slide-${number}@2x.${format}`,
  };
};
