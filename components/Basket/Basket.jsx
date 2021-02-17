import { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/ButtonLink';
import Count from '../UI/Count';

function Basket({ open, basketToggle, products, deleteProduct, addCountPortion, removeCountPortion, allPrice, numberWithSpaces }) {

    return (
        <BasketWraper open={open}>
            <WraperTitle>
                <h3>Корзина</h3>
                <i onClick={() => basketToggle(false)}>
                    <svg width="22px" height="21px">
                        <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                            d="M21.507,20.483 L21.453,20.535 C20.813,21.154 19.777,21.154 19.138,20.535 L11.416,13.063 L3.796,20.429 C3.163,21.041 2.137,21.041 1.504,20.429 L1.450,20.377 C0.817,19.765 0.817,18.773 1.450,18.161 L9.072,10.795 L1.774,3.733 C1.135,3.114 1.135,2.111 1.774,1.492 L1.828,1.440 C2.468,0.821 3.504,0.821 4.143,1.440 L11.443,8.503 L18.641,1.546 C19.274,0.934 20.300,0.934 20.933,1.546 L20.987,1.598 C21.620,2.209 21.620,3.201 20.987,3.813 L13.787,10.772 L21.507,18.242 C22.146,18.861 22.146,19.864 21.507,20.483 Z" />
                    </svg>
                </i>
            </WraperTitle>

            <ContainerProduct>
                {!!Object.keys(products).length && Object.keys(products).map(key => {
                    const product = products[key];
                    return (
                        <Product key={product.key}>
                            <div className="wraper-mobile">
                                <WraperImage>
                                    <img src={product.picture} alt="foto-product" />
                                </WraperImage>
                                <ul>
                                    <li>
                                        <p className='title-product'>{product.title}</p>
                                    </li>
                                    <li>
                                        <Count
                                            countPortion={product.selectedPortion}
                                            unit={product.unit}
                                            removeCountPortion={() => removeCountPortion(product)}
                                            addCountPortion={() => addCountPortion(product)} />
                                    </li>
                                </ul>
                            </div>

                            <WraperPrice>
                                <p className='price'>{`${product.selectedPrice} руб`}</p>
                                <i onClick={() => deleteProduct(product.key)}>
                                    <img src="/images/icons/delete.svg" alt="delete" />
                                </i>
                            </WraperPrice>
                        </Product>
                    )
                })}

            </ContainerProduct>

            {!!Object.keys(products).length ?
                <WraperAllPrice>
                    <h3>Сумма <span className='title-price'>{`${numberWithSpaces(allPrice)} руб.`}</span></h3>
                    <Button href='/' top='30px'>Оформить заказ</Button>
                </WraperAllPrice>

                :
                <NoneProducts>
                    <h3>Опс...  Корзина пуста =(</h3>
                </NoneProducts>
            }

        </BasketWraper >
    )
}

export default Basket;

const WraperPrice = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;

    .price {
        color: white;
        width: 100px;
        font-weight: 600;
    }

    @media (max-width: 660px) {
        padding: 10px;
        margin-top: 10px;
        background: #2b2b35;
        justify-content: center;
        .price {
            
        }
    }
`;

const Product = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: #1d1d25;
    padding: 12px;
    margin: 15px 0;

    .wraper-mobile {
        display: flex;
        align-items: center;
    }

    i {
       cursor: pointer; 
    }

    ul {
        display: flex;
        align-items: center;
        margin-left: 12px;
    }

    

    .title-product {
        
        font-size: 16px;
        color: #dbdbdb;
        width: 120px;
    }

    @media (max-width: 660px) {
        display: block;
        
        ul {
            display: block;
        }

        .wraper-mobile {
            justify-content: center;
        }

        li {
            padding: 0;
        }
        
        .title-product {
            width: auto;
            margin-bottom: 10px;
            color: white;
            font-size: 14px;
        }
    }
`;


const WraperImage = styled.div`
    width: 100px;
    min-width: 100px;
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-height: 80px;
        width: auto;
    }

    @media (max-width: 660px) {
        min-height: 100px;
        width: auto;

        img {
            min-height: 100px;
        }
    }
`;

const NoneProducts = styled.div`
    text-align: center;
    padding: 30px 15px;
    background: #1d1d25;
`;

const WraperAllPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    max-height: 20%;

    .title-price {
        color: #f7d38c;
    }

    @media (max-width: 1000px){
        margin-top: 20px;
        
        width: 100%;
        height: 100%;
        -webkit-box-pack: center;
        justify-content: center;
        flex-direction: column;
        padding: 15px;
    }
`;

const ContainerProduct = styled.div`
    overflow-y: scroll;
    max-height: 65%;

    @media (max-width: 1000px){
        max-height: 70%;
    }
`;

const WraperTitle = styled.div`
    display: flex;
    margin-bottom: 40px;
    h3 {
        flex: 1;
    }
    

    i {
        cursor: pointer;
    }

    @media (max-width: 660px) {
        margin-bottom: 20px;
        h3 {
            font-size: 24px;
        }
    }
`;

const BasketWraper = styled.div`
    transition-duration: 0.5s;
    position: fixed;
    right: ${({ open }) => open ? '0' : '-650px'};
    width: 650px;
    height: 100%;
    background: rgb(15, 15, 19);
    z-index: 100;
    box-shadow: ${({ open }) => open ? '-13px 0px 21.84px 2.16px rgb(6 6 6 / 86%)' : 'none'};;
    padding: 60px 40px;
    user-select: none;


    @media (max-width: 1000px){
        width: 100%;
        height: 100%;
        right: ${({ open }) => open ? '0' : '-100%'};
    }

    @media (max-width: 660px) {
        padding: 40px 20px;
    }

`;