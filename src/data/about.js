import {
  generateImageOneAbout,
  generateImageTwoAbout,
} from '../helpers/generateImagePathsAbout';

export const text = {
  id: 'about',
  title: 'Main values of our company',
  description:
    "EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.",
  values: [
    {
      icon: 'maximize-circle',
      value: 'Openness',
      text: 'to the world, people, new ideas and projects',
    },
    {
      icon: 'global-edit',
      value: 'Responsibility',
      text: 'we are aware that the results of our work have an impact on our lives and the lives of future generations',
    },
    {
      icon: 'cpu-charge',
      value: 'Innovation',
      text: 'we use the latest technology to implement non-standard solutions',
    },
    {
      icon: 'ranking',
      value: 'Quality',
      text: 'we do not strive to be the first among others, but we want to be the best in our business',
    },
  ],
};

export const aboutImageOneAdaptive = {
  tablet: {
    ...generateImageOneAbout('tablet', 'jpg'),
    ...generateImageOneAbout('tablet', 'webp'),
  },
  desktop: {
    ...generateImageOneAbout('desktop', 'jpg'),
    ...generateImageOneAbout('desktop', 'webp'),
  },
};

export const aboutImageTwoAdaptive = {
  tablet: {
    ...generateImageTwoAbout('tablet', 'jpg'),
    ...generateImageTwoAbout('tablet', 'webp'),
  },
  desktop: {
    ...generateImageTwoAbout('desktop', 'jpg'),
    ...generateImageTwoAbout('desktop', 'webp'),
  },
};
