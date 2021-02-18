import React from 'react';
import styled from 'styled-components';


function Button({ children, top = '15px', onClick, type }) {
    return (
        <SectionBtn>
            <Container top={top} onClick={onClick} type={type}>

                <a className='link-btn' >
                    <Wraper>
                        <span>{children}</span>
                    </Wraper>
                </a>

                <Shadow />
            </Container>
        </SectionBtn>



    )
}

export default Button;


const SectionBtn = styled.div`
    display: flex;
`;


const Wraper = styled.div`   
    width: 220px;
    height: 60px;
    border: none;
    background: url('/images/banner/button.png') no-repeat center center;
    
    background-size: contain;
    font-family: 'Secondary-font';
    font-weight: 900;
    cursor: pointer;
    font-size: 14px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        position: relative;
        bottom: 6px;
        color: #141414;
        text-shadow: 0px 1px 0px rgba(248, 236, 210, 1);
    }

    
    @media (max-width: 360px){
        width: 200px;
        height: 56px;
    }   
    
`;

const Shadow = styled.div`
    position: absolute;
    top: 5px;
    width: 200px;
    height: 46px;
    background: linear-gradient(0deg, #e2b319 0%, #F8E1BE 100%);
    z-index: 1;
    border-radius: 60px;
    box-shadow: 0px 10px 20px rgb(5 10 16);
    transition-duration: .2s;

    @media (max-width: 360px){
        width: 180px;
        height: 40px;
    }
`;

const Container = styled.button`
    user-select: none;
    margin-top: ${({ top }) => top};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
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
    
`;