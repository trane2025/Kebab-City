import React from 'react';
import styled from 'styled-components';
import SwiperSlider from '../Slider/SwiperSlider';
import Button from '../UI/ButtonLink';

const slides = [
    { href: '/images/about-kebab/image1.jpg' },
    { href: 'https://eda.yandex/images/1380157/39625e140ebb0bff476372085b5da8cb-1100x825.jpg' },
    { href: 'https://stroydesign24.ru/pics/shashlik-v-tandire-otzivi.jpg' },
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

    @media (max-width: 1250px) {
        margin-bottom: 100px;
        align-items: center;
    } 

    @media (max-width: 1000px) {
       flex-direction: column;
       margin-bottom: 50px;

    } 
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

    h2 {
            margin-bottom: 30px;
        }

    @media (max-width: 1250px) {
        justify-content: flex-start;
        h2 {
            margin-bottom: 30px;
        }
    } 

    @media (max-width: 1000px) {
        align-items: center;

    } 

    @media (max-width: 760px) {
        align-items: center;
        h2 {
            margin-bottom: 15px;
            text-align: center;
        }
    } 
`;

const Right = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    padding: 30px 40px;
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

    @media (max-width: 1250px) {
        padding: 30px 30px;
        p {
            width: 300px;
            font-size: 14px;
        }
    } 

    @media (max-width: 1000px) {
        padding: 30px 30px;
        p {
            width: 500px;
            font-size: 14px;
        }
    }

    @media (max-width: 760px) {
        
        p {
            width: auto;
            font-size: 14px;
        }

        h3 {
        width: auto;
        text-align: center;
        margin-bottom: 20px;
        
    }
    }

`;