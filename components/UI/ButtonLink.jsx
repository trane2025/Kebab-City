import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function Button({ children, href, top = '40px', onClick }) {
    return (
        <Container top={top} onClick={onClick}>
            <Link href={href}>
                <a className='link-btn' >
                    <Wraper>
                        <span>{children}</span>
                    </Wraper>
                </a>
            </Link>
            <Shadow />
        </Container>


    )
}

export default Button;



const Shadow = styled.div`
    position: absolute;
    top: 5px;
    width: 300px;
    height: 70px;
    background: linear-gradient(0deg, #e2b319 0%, #F8E1BE 100%);
    z-index: 1;
    border-radius: 60px;
    box-shadow: 0px 20px 20px rgb(5 10 16);
    transition-duration: .2s;

    @media (max-width: 1250px) {
        width: 230px;
        height: 50px;
    } 
`;

const Wraper = styled.div`   
    width: 320px;
    height: 85px;
    border: none;
    background: url('/images/banner/button.png') no-repeat center center;
    font-family: 'Secondary-font';
    font-weight: 900;
    cursor: pointer;
    font-size: 16px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        position: relative;
        bottom: 6px;
        color: #141414;
        text-shadow: 0px 1px 0px rgba(248, 236, 210, 1);
    }

    
    @media (max-width: 1250px) {
        width: 260px;
        height: 69px;
        background-size: contain;
    }    
    
`;

const Container = styled.div`
    user-select: none;
    margin-top: ${({ top }) => top};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 320px;

    .link-btn {
        z-index: 2;
    }

    :hover {
        ${Shadow} {
            box-shadow: 0px 0px 60px rgb(86 72 28);
        }
    }

    :active {
        ${Shadow} {
            box-shadow: 0px 20px 20px rgb(5 10 16); 
        }
        
    }


     @media (max-width: 1250px) {
        max-width: 260px;
        margin-top: 20px;
    } 
`;