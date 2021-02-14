import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Link from 'next/link';
import CardProductContainer from '../CardProduct/CardProductContainer';

function MenuCafe({ links, products, title }) {

    return (
        <Background>
            <Container>
                <Wraper>
                    <Main>
                        <h2>Меню</h2>
                        <ul>
                            {links.map(link => {
                                return (
                                    <li key={link.id + link.title}>
                                        <Link href={`/menu-cafe/${link.url}`}>
                                            <a>{link.title}</a>
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </Main>
                    <ShopWrap>
                        <h1>{title}</h1>
                        <Shop>
                            {products.map(product => {
                                return (
                                    <CardProductContainer key={product.id + product.title} product={product} />
                                )
                            })}
                        </Shop>
                    </ShopWrap>
                </Wraper>
            </Container>
        </Background>
    )
}

export default MenuCafe;

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
    
`;



const Background = styled.section`
    background: url('/images/MenuPage/background.jpg') repeat-y center top;
    position: relative;
`;

const Wraper = styled.section`
    display: flex;
    padding: 50px 0;
`;

const Main = styled.main`
    max-width: 270px;
    min-width: 270px;
    margin-right: 30px;

    li {
        margin: 18px 0;
    }

    a {
        font-weight: 400;
        font-size: 18px;
        color: #c1c1c7;

        :hover {
            color: white;
        }
    }
`;

