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
                                    <LinkMain key={link.id + link.title} active={title === link.title}>
                                        <Link href={`/menu-cafe/${link.url}`}>
                                            <a>{link.title}</a>
                                        </Link>
                                    </LinkMain>
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

const LinkMain = styled.li`
    
    max-width: 250px;

    a {
        font-size: 20px;
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
    
`;



const Background = styled.section`
    background: url('/images/MenuPage/background.jpg') repeat-y center top;
    position: relative;
    background-color: #1d1d25;
`;

const Wraper = styled.section`
    display: flex;
    padding: 50px 0;
`;

const Main = styled.main`
    max-width: 270px;
    min-width: 270px;
    margin-right: 30px;
    background-color: #1d1d25;

    h2 {
        position: sticky;
        top: 80px;
        margin-bottom: 30px;
    }

    ul {
        position: sticky;
        top: 160px;
    }
`;

