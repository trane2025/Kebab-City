import React from 'react';
import styled from 'styled-components';

function TermsOfDelivery() {
    return (
        <Section id='terms-delivery'>
            <h2 >Условия <span className='title-span'>доставки</span></h2>
            <Wraper>
                <WrapLeft>
                    <CardLeft>
                        <h4>Минимальный заказ <span >от 1 килограмма</span></h4>
                        <p>Вы — любитель жареного мяса? Тогда вам может прийтись по душе яркий фейерверк вкусов. </p>
                        <h2>01</h2>
                        <img src="/images/terms-of-delivery/left-card-light.png" alt="light" />
                    </CardLeft>
                    <CardLeft>
                        <h4>Бесплатная доставка <span>от 3 килограмм</span></h4>
                        <p>Любитель жареного мяса? Тогда вам может прийтись по душе  вкусов. </p>
                        <h2>02</h2>
                        <img src="/images/terms-of-delivery/left-card-light.png" alt="light" />
                    </CardLeft>
                </WrapLeft>
                <WrapRight>
                    <img src="/images/terms-of-delivery/Courier.png" alt="Courier" />
                </WrapRight>
            </Wraper>
        </Section>
    )
}

export default TermsOfDelivery;

const Section = styled.div`
    margin-bottom: 150px;
    .title-span {
        font-weight: 800;
        font-style: italic;
    }

    h2 {
        text-align: center;
    }

    @media (max-width: 1250px){
        margin-bottom: 100px;
    }

    @media (max-width: 1000px){
        margin-bottom: 60px;
    }
`;

const Wraper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    @media (max-width: 760px) {
        margin-top: 15px;
    }
`;

const WrapLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(44% - 15px);

    @media (max-width: 760px) {
        width: 100%;
    }
`;

const CardLeft = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    height: 250px;
    position: relative;
    padding: 30px;

    img {
        position: absolute;
        top: 0;
        right: 0;
    }

    h2 {
        font-size:72px;
        font-weight: 600;
        background: linear-gradient(180deg, #FFF2DE 0%, #F7D49C 59.37%, #F3C980 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: absolute;
        right: 30px;
        bottom: -17px;
    }

    h4 {
        width: 260px;
        margin-bottom: 10px;
    }

    span {
        color: #f7d48e;
        font-weight: 800;
    }

    p {
        width: 245px;
    }

    @media (max-width: 760px) {
        margin: 10px 0;
    }

    @media (max-width: 400px) {
        margin: 10px 0;
        p {
            width: auto;
        }

        h4 {
            width: auto;
        }
    }
`;

const WrapRight = styled.div`  
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    height: 520px;
    position: relative;
    width: calc(56% - 15px);

    img {
        position: absolute;
        top: 0;
    }

    @media (max-width: 1250px){
        width: calc(57% - 15px);
        overflow: hidden;
    }

    @media (max-width: 760px) {
        display: none;
    }
`;