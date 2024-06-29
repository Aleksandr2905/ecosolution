export const generateImagePathsMain = (device, format) => {
  const basePath = '/images';
  return {
    oneX: `${basePath}/${device}/hero-${device}@1x.${format}`,
    twoX: `${basePath}/${device}/hero-${device}@2x.${format}`,
  };
};
