import React from 'react';
import styled from 'styled-components';

function HowToDelivery() {
    return (
        <Section id='how-delivery'>
            <h2>Как заказать <span>доставку на дом</span></h2>
            <ContainerWraper>

                <WraperLeft>
                    <LeftCardTop>
                        <h4>Сделайте выбор <br /> блюд</h4>
                        <img src="/images/how-delivery/card1.png" alt="card" />
                        <h2>01</h2>
                    </LeftCardTop>
                    <LeftCardBottom>
                        <h4>Позвоните или <br /> оставьте заказ на сайте </h4>
                        <img src="/images/how-delivery/card2.png" alt="card" />
                        <h2>02</h2>
                    </LeftCardBottom>
                </WraperLeft>

                <WraperCenter>
                    <CenterCardTop>
                        <h4>Ожидайте курьера </h4>
                        <img src="/images/how-delivery/card3.png" alt="card" />
                        <h2>03</h2>
                    </CenterCardTop>
                    <CenterCardBottom>
                        <h4>Насладитесь вкусной <br /> и горячей едой </h4>
                        <img src="/images/how-delivery/card4.png" alt="card" />
                        <h2>04</h2>
                    </CenterCardBottom>
                </WraperCenter>

                <WraperRight>
                    <img src="/images/how-delivery/card5.png" alt="card" />
                </WraperRight>

            </ContainerWraper>
        </Section >
    )
}

export default HowToDelivery;

const Section = styled.section`
    margin-bottom: 150px;
    span {
        font-weight: 800;
        font-style: italic;
    }

    h2 {
        text-align: center;
    }

    @media (max-width: 1250px) {
        margin-bottom: 100px;
    }

    @media (max-width: 1000px) {
        margin-bottom: 60px;
    }
`;

const ContainerWraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

    @media (max-width: 760px) {
        display: block;
        margin-top: 15px;
    }
`;

const WraperLeft = styled.div`
    
    @media (max-width: 1250px) {
        width: calc(50% - 15px);
    }

    @media (max-width: 760px) {
        width: 100%;
    }
`;

const LeftCardBottom = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    width: 370px;
    height: 215px;
    padding: 30px;
    position: relative;

    h2 {
        font-size:72px;
        font-weight: 600;
        background: linear-gradient(180deg, #FFF2DE 0%, #F7D49C 59.37%, #F3C980 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: absolute;
        bottom: -17px;
    }

    img {
        position: absolute;
        bottom: 0;
        right: 0;
    }


    @media (max-width: 1250px) {
        width: 100%;
    }


`;

const LeftCardTop = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    width: 370px;
    height: 280px;
    margin-bottom: 25px;
    position: relative;
    padding: 30px;

    h2 {
        font-size:72px;
        font-weight: 600;
        background: linear-gradient(180deg, #FFF2DE 0%, #F7D49C 59.37%, #F3C980 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: absolute;
        bottom: -17px;
    }

    img {
        position: absolute;
        bottom: 0;
        right: -5px;
    }

    @media (max-width: 1250px) {
        width: 100%;
    }
`;

const WraperCenter = styled.div`
    @media (max-width: 1250px) {
        width: calc(50% - 15px);
    }

    @media (max-width: 760px) {
        width: 100%;
        margin-top: 20px;
    }
`;

const CenterCardTop = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    width: 370px;
    height: 215px;
    margin-bottom: 25px;
    position: relative;
    padding: 30px;

    h2 {
        font-size:72px;
        font-weight: 600;
        background: linear-gradient(180deg, #FFF2DE 0%, #F7D49C 59.37%, #F3C980 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: absolute;
        bottom: -17px;
    }

    img {
        position: absolute;
        bottom: 0;
        right: 20px;
    }

    @media (max-width: 1250px) {
        width: 100%;
    }
`;

const CenterCardBottom = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    width: 370px;
    height: 280px;
    padding: 30px;
    position: relative;

    h2 {
        font-size:72px;
        font-weight: 600;
        background: linear-gradient(180deg, #FFF2DE 0%, #F7D49C 59.37%, #F3C980 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: absolute;
        bottom: -17px;
    }

    img {
        position: absolute;
        bottom: 0;
        right: -14px;
    }

    @media (max-width: 1250px) {
        width: 100%;
    }

    
`;

const WraperRight = styled.div`
   
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    width: 370px;
    height: 520px;
    position: relative;

    img {
        position: absolute;
        bottom: 0;
        right: -17px;
    }

    @media (max-width: 1250px) {
        display: none;

    }

`;
