import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useMediaQuery } from 'react-responsive';
import Card from '../Card/Card';
import { slidesImage } from '../../../data/cases';
import sprite from '../../../assets/icons/sprite.svg';
import * as s from './Slider.styled';

const Slider = () => {
  const refSlider = useRef(null);
  const tablet = useMediaQuery({ minWidth: 768 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    refSlider.current.swiper.slidePrev(300);
  };
  const handleNext = () => {
    refSlider.current.swiper.slideNext(300);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const formatNumber = (number) => {
    return String(number).padStart(2, '0');
  };

  return (
    <div>
      <s.Wrapper>
        <s.Counter>
          {formatNumber(activeIndex + 1)}
          <span>/{formatNumber(slidesImage.length)}</span>
        </s.Counter>
        <s.Buttons>
          <s.BtnPrev
            type="button"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <svg width="36" height="36">
              <use href={`${sprite}#arrow-right`} />
            </svg>
          </s.BtnPrev>
          <s.BtnNext type="button" onClick={handleNext} aria-label="Next Slide">
            <svg width="36" height="36">
              <use href={`${sprite}#arrow-right`} />
            </svg>
          </s.BtnNext>
        </s.Buttons>
      </s.Wrapper>
      <Swiper
        ref={refSlider}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={tablet ? 2 : 1}
        onSlideChange={handleSlideChange}
        loop={true}
      >
        {slidesImage.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
