import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Link from 'next/link';






function Navbar({ links, route, toggleBasketHandler, countProducts, animate }) {

    return (
        <section>
            <Top>
                <Container>
                    <div className="wraper-top">
                        <WraperGeolocation left={true}>
                            <div className="wraper-Geolocation-text">
                                <img src="/images/icons/geolocation.png" alt="geolocation" />
                                <p>ул.Славянская 20</p>
                            </div>

                            <i>
                                <svg
                                    width="288px" height="9px">
                                    <path fillRule="evenodd" fill="rgb(70, 70, 70)"
                                        d="M15.000,1.000 L15.000,-0.000 L287.999,-0.000 L287.999,1.000 L15.000,1.000 ZM272.999,8.999 L-0.001,8.999 L-0.001,7.999 L272.999,7.999 L272.999,8.999 Z" />
                                </svg>
                            </i>
                        </WraperGeolocation>

                        <img className='logo-kebab' src="/images/logo/Kebab.png" alt="logo" />
                        <img src="/images/logo/db.png" alt="logo" />

                        <WraperGeolocation>
                            <div className="wraper-Geolocation-text">
                                <img src="/images/icons/geolocation.png" alt="geolocation" />
                                <p>ул.Славянская 20</p>
                            </div>

                            <i>
                                <svg width="288px" height="9px">
                                    <path fillRule="evenodd" fill="rgb(70, 70, 70)"
                                        d="M15.000,8.999 L15.000,7.999 L288.000,7.999 L288.000,8.999 L15.000,8.999 ZM-0.001,-0.000 L273.000,-0.000 L273.000,1.000 L-0.001,1.000 L-0.001,-0.000 Z" />
                                </svg>
                            </i>
                        </WraperGeolocation>
                    </div>
                </Container>
            </Top>
            <Bottom>
                <Container>
                    <ul>
                        <BasketIcon onClick={() => toggleBasketHandler(true)} className={animate}>
                            <img src="/images/icons/basket-icon.png" alt="basket" />
                            {!!countProducts &&
                                <div className="count-basket-products">
                                    <p>{countProducts}</p>
                                </div>
                            }
                        </BasketIcon>
                        {links.map((link, index) => {
                            return (
                                <LinkWrap key={index} active={route === link.href}>
                                    <Link href={link.href}>
                                        <a>{link.label}</a>
                                    </Link>
                                </LinkWrap>
                            )
                        })}

                    </ul>
                </Container>
            </Bottom>
        </section>
    )
}

export default Navbar;


const BasketIcon = styled.div`
    position: absolute;
    top: -5px;
    right: 0px;
    cursor: pointer;
    z-index: 10;

    img {
        width: 70px;
        height: 70px;
    }

    .count-basket-products {
        border-radius: 50%;
        background-color: white;
        width: 35px;
        height: 35px;
        position: absolute;
        right: -5px;
        bottom: -8px;
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

const LinkWrap = styled.li`
    
    margin: 0 18px;

    a {
            font-family: 'Secondary-font';
            font-weight: 600;
            font-size: 16px;
            color: ${({ active }) => active ? '#f7c77e' : '#d4d4d4'};
            transition-duration: .3s;
        :hover {
            color: #f7c77e;
        }
    }
    
`;



const Top = styled.div`
    background: #0f0f13;
    padding: 10px 0;

    .wraper-top {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .logo-kebab {
        position: relative;
        top: 10px;
    }
`;



const WraperGeolocation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.left ? 'flex-end' : 'flex-start'};
    width: fit-content;

    .wraper-Geolocation-text {
        display: flex;
        align-items: center;

        img {
            margin-right: 10px;
        }

        p {
            font-family: 'Secondary-font';
            font-weight: 800;
            font-size: 18px;
            color: rgb(255, 254, 254);
            line-height: 3.333;
        }
    }
`;

const Bottom = styled.div`
    background: #1a1a21;

    

    ul {
        display: flex;
        padding: 18px;
        justify-content: center;
        position: relative;
    }
`;
