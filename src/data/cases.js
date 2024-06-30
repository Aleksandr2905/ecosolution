import { generateImagePathsSlider } from '../helpers/generateImagePathsSlider';

export const text = {
  id: 'cases',
  title: 'Successful cases of our company',
  slides: [
    {
      id: 1,
      title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
      subTitle: 'Wind Power for auto field irrigation',
      date: 'July 2023',
    },
    {
      id: 2,
      title: 'Zhytomyr city Private Enterprise “Bosch”',
      subTitle: 'Solar Panels for industrial use',
      date: 'November 2023',
    },
    {
      id: 3,
      title: 'Rivne city Private Enterprise “Biotech”',
      subTitle: 'Thermal modules',
      date: 'October 2023',
    },
    {
      id: 4,
      title: 'Kherson city Private Enterprise “HealthyFarm”',
      subTitle: 'Wind power',
      date: 'September 2021',
    },
    {
      id: 5,
      title: 'Zaporizhia city Private Enterprise “Biotech”',
      subTitle: 'Mini nuclear stations',
      date: 'May 2021',
    },
  ],
};

export const slidesImage = text.slides.map((slide) => ({
  ...slide,
  jpg: generateImagePathsSlider(slide.id, 'jpg'),
  webp: generateImagePathsSlider(slide.id, 'webp'),
}));
