export const generateImagePathsMain = (device, format) => {
  return {
    oneX: `/images/${device}/hero-${device}@1x.${format}`,
    twoX: `/images/${device}/hero-${device}@2x.${format}`,
  };
};
