import { generateImagePathsMain } from '../helpers/generateImagePathsMain';

export const text = {
  id: 'main',
  title: 'RENEWABLE ENERGY For any task',
  description:
    'Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass',
  address: '79005, Ukraine, Lvivstreet. Shota Rustaveli, 7',
  email: 'office@ecosolution.com',
};

export const heroImageAdaptive = {
  mobile: {
    ...generateImagePathsMain('mobile', 'jpg'),
    ...generateImagePathsMain('mobile', 'webp'),
  },
  tablet: {
    ...generateImagePathsMain('tablet', 'jpg'),
    ...generateImagePathsMain('tablet', 'webp'),
  },
  desktop: {
    ...generateImagePathsMain('desktop', 'jpg'),
    ...generateImagePathsMain('desktop', 'webp'),
  },
};
