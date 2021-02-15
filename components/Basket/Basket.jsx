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
                    <svg
                        width="20px" height="20px">
                        <path fillRule="evenodd" fill="rgb(246, 246, 246)"
                            d="M2.858,19.993 L0.002,17.139 L7.146,9.999 L-0.002,2.855 L2.851,0.003 L9.999,7.148 L17.143,0.008 L19.998,2.862 L12.854,10.001 L20.000,17.144 L17.147,19.995 L10.001,12.853 L2.858,19.993 Z" />
                    </svg>
                </i>
            </WraperTitle>

            <ContainerProduct>
                {!!Object.keys(products).length && Object.keys(products).map(key => {
                    const product = products[key];
                    return (
                        <Product key={product.key}>
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
                                <li>
                                    <p className='price'>{`${product.selectedPrice} руб`}</p>
                                </li>
                            </ul>
                            <i onClick={() => deleteProduct(product.key)}>
                                <img src="/images/icons/delete.svg" alt="delete" />
                            </i>
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

    .title-price {
        color: #f7d38c;
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
`;

const ContainerProduct = styled.div`
    overflow-y: scroll;
    max-height: 400px;
`;

const Product = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: #1d1d25;
    padding: 12px;
    margin: 15px 0;

    i {
       cursor: pointer; 
    }

    ul {
        display: flex;
        align-items: center;
        margin-left: 12px;
    }

    li {
        padding: 12px;
    }

    .title-product {
        
        font-size: 16px;
        color: #dbdbdb;
        width: 120px;
    }

    .price {
        color: white;
        width: 100px;
        font-weight: 600;
    }
`;

const WraperTitle = styled.div`
    display: flex;

    h3 {
        flex: 1;
    }
    margin-bottom: 40px;

    i {
        cursor: pointer;
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

`;