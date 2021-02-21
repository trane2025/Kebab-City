import React from 'react';
import styled from 'styled-components';

function CheckBox({ children, method, name, checkBoxArr, activeCheckBox }) {
    return (
        <RadioContainer>

            <Title>{children}</Title>

            <RadioList>
                {checkBoxArr.map((item, index) => {
                    return (
                        <RadioItem key={`${index}-${item.id}-${name}`}>
                            <input name={name} type='radio' id={item.id} defaultChecked={item.label === activeCheckBox} />
                            <label htmlFor={item.id} onClick={() => { method(item.label) }}><span>{item.label}</span></label>
                        </RadioItem>
                    )
                })}

            </RadioList>

        </RadioContainer>
    )
}

export default CheckBox;

const Title = styled.p`
    margin-bottom: 10px;

    @media (max-width: 760px){
        font-size: 14px;
    }
`;

const RadioList = styled.ul`

    display: flex;
    margin-top: 20px;
`;


const RadioItem = styled.li`
    cursor: pointer;
    margin-right: 60px;
    

    label {
        cursor: pointer;
        display: flex;
        align-items: center;
        position: relative;
        color: #d6d6d6;
        font-family: 'Secondary-font';
        

        ::before {
            content: '';
            align-self: flex;
            flex: 0 0 20px;
            height: 20px;
            background-color: white;
            border-radius: 50%;
            margin-right: 6px;
        }

        ::after {
            content: '';
            position: absolute;         
            border-radius: 50%;
            background-color: #1d1d25;
            width: 12px;
            height: 12px;
            top: 5px;
            left: 4px;
            transform: scale(0);
            transition-duration: .1s;
        }

    }

    input {
        display:none;
    }

    input:checked + label:after   {
        transform: scale(1);
    }

    @media (max-width: 760px){

        label {
            font-size: 14px;

                ::after {
                content: '';
                position: absolute;         
                border-radius: 50%;
                background-color: #1d1d25;
                width: 12px;
                height: 12px;
                top: 4px;
                left: 4px;
                transform: scale(0);
                transition-duration: .1s;
            }
        }
        
    }
`;


const RadioContainer = styled.div`
    
`;