import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Link from 'next/link';
import ButtonMobileNav from '../UI/ButtonMobileNav';
import NavbarMobile from './NavbarMobile';
import { connect } from 'react-redux';
import { toggleMobileMenu } from '../../store/redusers/mobileMenu';






function Navbar({ links, route, toggleBasketHandler, countProducts, animate, toggleMobileMenu, mobileMenu }) {

    const [activeBtn, setActiveBtn] = useState(false);

    return (
        <>
            <NavbarMobile links={links} activeBtn={activeBtn} setActiveBtn={setActiveBtn} route={route} />
            <ButtonMobileNav activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
            <Top>
                <Container>
                    <div className="wraper-top">
                        <WraperGeolocation left={true}>
                            <div className="wraper-Geolocation-text">
                                <img src="/images/icons/geolocation.png" alt="geolocation" />
                                <div>
                                    <p className='phone'>41-42-42</p>
                                    <p className='adres'>ул. Медногорская, 121</p>
                                </div>
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
                                <div>
                                    <p className='phone'>42-28-22</p>
                                    <p className='adres'>ул.Славянская 20</p>
                                </div>
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
                            <img src="/images/icons/backet-icon.svg" alt="basket" />
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

        </>
    )
}

const mapStateToProps = (state) => ({
    mobileMenu: state.mobileMenu.open
})

export default connect(mapStateToProps, { toggleMobileMenu })(Navbar);



const BasketIcon = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
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

    @media ( max-width: 1000) {
        display: none;
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
    position: relative;
    z-index: 9;

    .wraper-top {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
    }

    .logo-kebab {
        position: relative;
        top: 10px;
    }

    @media (max-width: 1000px) {
        .wraper-top {
            justify-content: flex-start;
        }

        .logo-kebab {
        margin-right: 30px;
    }
        
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
            font-weight: 400;
            font-size: 16px;
            color: rgb(218, 218, 218);
            line-height: 1.6;
        }

        .phone {
            font-weight: 800;
            font-size: 18px;
            color: white;
        }
    }

    @media (max-width: 1250px){
        i {
            display: none;
        }
    }

    @media (max-width: 1000px){
        
        display: none;
    
    }
`;

const Bottom = styled.div`
    background: #19191f;
    position: sticky;
    top: 0;
    z-index: 11;
    

    ul {
        display: flex;
        padding: 18px;
        justify-content: center;
        position: relative;
    }

    @media (max-width: 1000px){
        
        display: none;
    
    }
`;
