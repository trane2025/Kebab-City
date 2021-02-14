import React from 'react';
import styled from 'styled-components';
import SwiperSlider from '../Slider/SwiperSlider';
import Button from '../UI/ButtonLink';

const slides = [
    { href: '/images/about-kebab/image1.jpg' },
    { href: 'https://eda.yandex/images/1380157/39625e140ebb0bff476372085b5da8cb-1100x825.jpg' },
    { href: 'http://peoplesrest.ru/media/images/store/food/33/06/33063a85be738b0192976a325e812e30.jpg' },
]

function AboutKebab() {



    return (
        <Section>

            <Left>
                <h2>Шашлык <span>на тандыре</span></h2>
                <SwiperSlider slides={slides} />
            </Left>
            <Right>
                <h3>Старый рецепт любимого блюда</h3>
                <p>Тандыр – это среднеазиатская керамическая печь, в которой можно готовить мясо, рыбу
                и овощи, а также печь вкусные лепешки и пирожки. Блюда, приготовленные в этой печи, отличаются особым вкусом и ароматом. В тандыре можно приготовить и такое популярное и пользующееся всеобщей любовью блюдо, как шашлык</p>
                <Button top='20px' href='/menu-cafe'>Перейти в меню</Button>
            </Right>
        </Section>
    )
}

export default AboutKebab;



const Section = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 150px;
`;

const Left = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        font-weight: 800;
        font-style: italic;
    }
`;

const Right = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    width: 471px;
    height: 536px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    h3 {
        width: 330px;
        text-align: center;
        margin-bottom: 20px;
        
    }

    p {
        width: 380px;
        line-height: 1.875;
    }

`;