import { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/ButtonLink';
import Count from '../UI/Count';

function BasketOrder({ open, basketToggle, products, deleteProduct, addCountPortion, removeCountPortion, allPrice, numberWithSpaces }) {

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
                                <Price>
                                    <span>{`Цена за ${product.price_volume}`}</span>
                                    {`${product.price} ₽`}
                                </Price>
                                <i onClick={() => deleteProduct(product.key)}>
                                    <img src="/images/icons/delete.svg" alt="delete" />
                                </i>
                            </WraperPrice>
                        </Product>
                    )
                })}

            </ContainerProduct>

            {!Object.keys(products).length &&
                <NoneProducts>
                    <h3>Опс...  Корзина пуста =(</h3>
                </NoneProducts>
            }

        </BasketWraper >
    )
}

export default BasketOrder;

const Price = styled.p`
    margin-right: 15px;
    color: white;
    font-weight: 800;
    font-size: 24px;
    width: 120px;
    

    span {
        font-size: 12px;
        font-weight: 400;
        color: #dfdfdf;
        display: block;
        margin-bottom: 7px;
    }
    
    @media (max-width: 660px) {
        font-size: 18px;
    }
`;

const WraperPrice = styled.div`
    display: flex;
    align-items: center;
    padding-left: 30px;

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
        width: 100px;
        margin-right: 10px;
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


const ContainerProduct = styled.div`
    overflow-y: scroll;
    max-height: 500px;

    @media (max-width: 1000px){
        max-height: 80%;
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
        display: none;
    }

    @media (max-width: 1000px) {
        
        margin-bottom: 20px;
        h3 {
            font-size: 36px;
        }
        i {
            display: block;
        }
    }

    @media (max-width: 660px) {
        margin-bottom: 20px;
        h3 {
            font-size: 30px;
        }
    }
`;

const BasketWraper = styled.div`
    transition-duration: 0.5s;
    width: 650px;
    height: 100%;
    background: rgb(15 15 19 / 62%);
    padding: 60px 40px;
    user-select: none;


    @media (max-width: 1250px){
        position: fixed;
        background: rgb(15 15 19);
        top: 0;
        z-index: 100;
        width: 650px;
        height: 100%;
        right: ${({ open }) => open ? '0' : '-650px'};
        box-shadow: ${({ open }) => open ? '-13px 0px 21.84px 2.16px rgb(6 6 6 / 86%)' : 'none'};;
    }

    @media (max-width: 1000px) {
        padding: 40px 20px;
    }

    @media (max-width: 760px){
        width: 100%;
        right: ${({ open }) => open ? '0' : '-100%'};
    }

`;