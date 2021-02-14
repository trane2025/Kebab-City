import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function SwiperSlider({ slides }) {
    return (
        <Slider>
            <ArrowPrev src='/images/about-kebab/button-slider.svg' />
            <ImageWraper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={{
                        nextEl: `${ArrowPrev}`,
                        prevEl: `${ArrowNext}`
                    }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                    }}
                >
                    {slides.map((item, key) => {
                        return (
                            <SwiperSlide key={key} >
                                <img src={item.href} alt="Фото" />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </ImageWraper>
            <ArrowNext src='/images/about-kebab/button-slider-left.svg' />
        </Slider>
    )
}

export default SwiperSlider;

const ArrowNext = styled.img`
    position: absolute;
    left: -25px; 
    z-index: 10;
`;

const ArrowPrev = styled.img`
    position: absolute;
    right: -25px;
    z-index: 10;
`;

const Slider = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageWraper = styled.div`
    border-radius: 10px;
    width: 670px;
    max-width: 670px;
    max-height: 435px;
    height: 435px;
    overflow: hidden;
    
    img {
      max-height: auto;
      width: 670px;
      max-width: 670px;  
    }
`;
