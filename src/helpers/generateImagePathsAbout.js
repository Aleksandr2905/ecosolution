export const generateImageOneAbout = (device, format) => {
  return {
    oneX: `/images/${device}/main-man-${device}@1x.${format}`,
    twoX: `/images/${device}/main-man-${device}@2x.${format}`,
  };
};

export const generateImageTwoAbout = (device, format) => {
  return {
    oneX: `/images/${device}/main-panels-${device}@1x.${format}`,
    twoX: `/images/${device}/main-panels-${device}@2x.${format}`,
  };
};
