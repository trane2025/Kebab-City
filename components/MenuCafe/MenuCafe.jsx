import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Link from 'next/link';
import CardProductContainer from '../CardProduct/CardProductContainer';
import { connect } from 'react-redux';
import { toggleMobileMenu } from '../../store/redusers/mobileMenu';
import { basketToggle } from '../../store/redusers/basket';

const useUpdateEffect = (fn, deps) => {
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) {
            fn()
        }
        else ref.current = true;
    }, deps)
}

function MenuCafe({ links, products, title, mobileMenu, toggleMobileMenu, basketToggle, countProducts }) {

    const [animate, setAnimate] = useState('');

    useUpdateEffect(() => {
        setAnimate('animated shake fast');
        setTimeout(() => {
            setAnimate('');
        }, [500])
    }, [countProducts])

    return (
        <>
            <Background>
                <Container>
                    <Wraper>
                        <Main mobileActive={mobileMenu}>
                            <i onClick={() => toggleMobileMenu(!mobileMenu)}>
                                <svg width="22px" height="21px">
                                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                        d="M21.507,20.483 L21.453,20.535 C20.813,21.154 19.777,21.154 19.138,20.535 L11.416,13.063 L3.796,20.429 C3.163,21.041 2.137,21.041 1.504,20.429 L1.450,20.377 C0.817,19.765 0.817,18.773 1.450,18.161 L9.072,10.795 L1.774,3.733 C1.135,3.114 1.135,2.111 1.774,1.492 L1.828,1.440 C2.468,0.821 3.504,0.821 4.143,1.440 L11.443,8.503 L18.641,1.546 C19.274,0.934 20.300,0.934 20.933,1.546 L20.987,1.598 C21.620,2.209 21.620,3.201 20.987,3.813 L13.787,10.772 L21.507,18.242 C22.146,18.861 22.146,19.864 21.507,20.483 Z" />
                                </svg>
                            </i>
                            <div className="wraper-styki">
                                <h2>Меню</h2>
                                <ul>
                                    {links.map(link => {
                                        return (
                                            <LinkMain key={link.id + link.title} active={title === link.title} onClick={() => toggleMobileMenu(!mobileMenu)}>
                                                <Link href={`/menu-cafe/${link.url}`}>
                                                    <a>{link.title}</a>
                                                </Link>
                                            </LinkMain>
                                        )
                                    })}

                                </ul>
                            </div>
                        </Main>
                        <ShopWrap>
                            <h1>{title}</h1>
                            {products && <Shop>
                                {products.map(product => {
                                    return (
                                        <CardProductContainer key={product.id + product.title} product={product} />
                                    )
                                })}
                            </Shop>}
                        </ShopWrap>
                    </Wraper>
                </Container>
            </Background >

            <MobileMenu >
                <button onClick={() => toggleMobileMenu(!mobileMenu)}>Меню</button>
                <BasketIconMobile onClick={() => basketToggle(true)} className={animate}>
                    <img src="/images/icons/backet-icon.svg" alt="basket" />
                    {!!countProducts &&
                        <div className="count-basket-products">
                            <p>{countProducts}</p>
                        </div>
                    }
                </BasketIconMobile>
            </MobileMenu>
        </>
    )
}

const mapStateToProps = (state) => ({
    mobileMenu: state.mobileMenu.open,
    countProducts: state.basket.countProducts
})



export default connect(mapStateToProps, { toggleMobileMenu, basketToggle })(MenuCafe);


const MobileMenu = styled.div`
    padding: 20px 30px;
    width: 100%;
    background: #0f0f13;
    position: fixed;
    bottom: 0;
    z-index: 9;
    display: none;
    justify-content: space-between;
    align-items: center;

    button {
        padding: 15px 65px;
        font-weight: 800;
        font-size: 14px;
        border-radius: 30px;
        border: none;
        color: #1b1a20;
        background: #FFFFFF;
        box-shadow: 0px 0px 3px #FFDAA5;
        cursor: pointer;
    }

    @media (max-width: 1000px){
        display: flex;
    }
`;

const BasketIconMobile = styled.div`
    width: fit-content;
    position: relative;
    cursor: pointer;
    z-index: 10;

    img {
        width: 60px;
        height: 60px;
    }

    .count-basket-products {
        border-radius: 50%;
        background-color: white;
        width: 35px;
        height: 35px;
        position: absolute;
        right: -8px;
        bottom: -12px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgb(18 18 18 / 27%) -3.41px 3.657px 8.19px 0.81px;

        p {
            color: #1b1b1b;
            font-weight: 800;
            font-size: 16px;
        }

    }
`;



const LinkMain = styled.li`
    
    max-width: 250px;

    a {
        font-size: 18px;
        color: ${props => props.active ? '#1c2024' : '#c2c2c2'};
        font-weight: ${props => props.active ? '800' : '400'};
        padding-left: 20px;
        display: block;
        padding-top: 12px;
        padding-bottom: 12px;
        clip-path: polygon(0% 0%, 96% 0, 100% 50%, 96% 100%, 0% 100%);
        background-color: ${props => props.active ? ' rgb(252, 198, 92);' : 'none'};
        

        :hover {
            color: ${props => props.active ? '#1c2024' : 'white'}; 
        }
    }

    @media ( max-width: 1000px) {
        a {
            color: ${props => props.active ? '#1c2024' : 'white'}; 
        }
    }
`;

const Shop = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-left: -15px;
    margin-right: -15px;
`;

const ShopWrap = styled.div`
    h1 {
        font-size: 48px;
    }

    padding: 50px 0;

    @media (max-width: 760px) {
        h1 {
            font-size: 36px;
        }
        
    }
    
`;



const Background = styled.section`
    background: url('/images/MenuPage/background.jpg') repeat-y center top;
    position: relative;
    background-color: #1d1d25;

    @media (max-width: 1000px) {
        background: url('/images/background/back.jpg') repeat-y center top;
    }
`;

const Wraper = styled.section`
    display: flex;
    
`;

const Main = styled.main`
    position: relative;
    padding: 50px 0;
    max-width: 270px;
    min-width: 270px;
    margin-right: 30px;
    background-color: #1d1d25;

    i {
        position: absolute;
        right: 30px;
        top: 30px;
        cursor: pointer;
        display: none;
    }

    .wraper-styki {
        position: sticky;
        top: 130px;
    }

    h2 {
        margin-bottom: 15px;
    }

    @media (max-width: 1000px) {
        position: fixed;
        top: 0;
        transition-duration: .4s;
        left: ${({ mobileActive }) => mobileActive ? 0 : '-100%'};
        width: 100%;
        min-width: 100%;
        height: 100%;
        z-index: 20;
        padding-left: 40px;

        i {
            display: block;
        }

        h2 {
            position: relative;
            top: 0;
    }

        ul {
            position: relative;
            top: 0;
        }
    }
`;

