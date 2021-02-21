import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function SwiperSlider({ slides }) {

    let video = useRef(null);

    useEffect(() => {
        video.current = document.querySelectorAll('video');
        console.log(video);
    }, [])

    const clickArrow = () => {
        video.current.forEach(item => {
            item.pause()
        })
    }

    return (
        <Slider>
            <ArrowPrev src='/images/about-kebab/button-slider.svg' onClick={clickArrow} />
            <ImageWraper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={{
                        nextEl: `${ArrowPrev}`,
                        prevEl: `${ArrowNext}`
                    }}
                    scrollbar={{ draggable: true }}

                >
                    {slides.map((item, key) => {
                        return (
                            <SwiperSlide key={key} >
                                {item.teg === 'img' && <img src={item.href} alt="Фото" />}
                                {item.teg === 'video' &&
                                    <WraperVideo>
                                        <video controls alt="Видео">
                                            <source src={item.href} type="video/mp4"></source>
                                        </video>
                                    </WraperVideo>}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </ImageWraper>
            <ArrowNext src='/images/about-kebab/button-slider-left.svg' onClick={clickArrow} />
        </Slider>
    )
}

export default SwiperSlider;

const WraperVideo = styled.div`
    width: 100%;
    max-height: 435px;
    height: 435px;
    background-color: #0f1017;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
        max-height: 436px;
        width: auto;
    }

    @media (max-width: 1250px) {
        max-width: 500px;
        height: 320px;

        video {
            max-height: 436px;
            width: auto;
            height: 320px;
        }
    }


    @media (max-width: 560px) {
        width: 320px;
        height: auto;
        video {
            max-height: 300px;
            height: 250px;
        }
    }

`;

const ArrowNext = styled.img`
    position: absolute;
    left: -25px; 
    z-index: 10;

    @media (max-width: 760px){
        display: none;
    }
`;

const ArrowPrev = styled.img`
    position: absolute;
    right: -25px;
    z-index: 10;

    @media (max-width: 760px){
        display: none;
    }
`;

const Slider = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 760px) {
    }
`;

const ImageWraper = styled.div`
    border-radius: 10px;
    width: 670px;
    max-width: 670px;
    max-height: 435px;
    height: 435px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      max-height: auto;
      max-width: 670px;  
    }

    @media (max-width: 1250px) {
        max-width: 500px;
        height: 320px;

        img {
            max-width: 500px;  
        }
    } 

    @media (max-width: 1000px) {
        width: auto;
        height: 320px;
        margin-bottom: 30px;

        img {
            height: auto;
            width: auto;
        }
    }

    @media (max-width: 560px) {
        width: 320px;
        max-width: 320px;
        height: 320px;
       
        img {
           width: 320px;
           height: auto; 
        }

    }
`;
