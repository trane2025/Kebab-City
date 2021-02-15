import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Link from 'next/link';

function Footer({ links, route }) {
    return (
        <BackgroundSection>
            <Container>
                <Section>
                    <LeftWrap>
                        <LeftWrapTop>
                            <img src="/images/logo/Kebab.png" alt="logo" />
                            <img src="/images/logo/db.png" alt="logo" />
                        </LeftWrapTop>

                        <LeftWrapBottom>
                            {links.map((link, index) => {
                                return (
                                    <LinkWrap key={index} active={route === link.href}>
                                        <Link href={link.href}>
                                            <a>{link.label}</a>
                                        </Link>
                                    </LinkWrap>
                                )
                            })}
                        </LeftWrapBottom>
                    </LeftWrap>
                    <RightWrap target='_blank' href='https://bzcekh.ru/'>
                        <img src="/images/logo/logo-footer.svg" alt="лого" />
                    </RightWrap>
                </Section>
            </Container>
        </BackgroundSection>

    )
}

export default Footer;

const LinkWrap = styled.li`
    
    margin: 0 36px 0 0;

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

const BackgroundSection = styled.section`
    padding: 40px 0;
    background: #0f0f13;
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const LeftWrapTop = styled.div`
    margin-bottom: 30px;
`;

const LeftWrapBottom = styled.ul`
    display: flex;
`;

const LeftWrap = styled.div`
    img {
        margin-right: 30px;
    }
`;



const RightWrap = styled.a`
    img {
        
    }
`;