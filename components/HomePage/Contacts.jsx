import React from 'react';
import styled from 'styled-components';

function Contacts() {
    return (
        <Section id='contact'>
            <h2>Контактная <span>информация</span></h2>
            <Wraper>
                <Left>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A625558781eb151d6a95220764072d9f7d556052ae1eb4ee4a2c2adcd7f17167f&amp;source=constructor" width="670" height="450" frameBorder="0"></iframe>
                </Left>
                <Right>
                    <h3>Ждем Вас в гости</h3>

                    <WraperContent>
                        <div className="wraperContacts">
                            <div>
                                <WraperContact>
                                    <img src="/images/icons/geolocation.png" alt="icon" />
                                    <p>ул.Славянская 20</p>
                                </WraperContact>
                                <WraperContact>
                                    <img src="/images/icons/phone.png" alt="icon" />
                                    <p>+7 (8512) 42-28-22</p>
                                </WraperContact>
                            </div>

                            <hr />
                            <div>
                                <WraperContact>
                                    <img src="/images/icons/geolocation.png" alt="icon" />
                                    <p>Медногорская, 121</p>
                                </WraperContact>
                                <WraperContact>
                                    <img src="/images/icons/phone.png" alt="icon" />
                                    <p>+7 (8512) 41-42-42</p>
                                </WraperContact>
                            </div>
                        </div>
                        <WraperLinks>
                            <a target='_blank' href='https://yandex.ru/maps/?um=constructor%3A625558781eb151d6a95220764072d9f7d556052ae1eb4ee4a2c2adcd7f17167f&source=constructorLink'>Посмотреть в яндексе</a>
                            <div>
                                <img src="/images/icons/instagram.svg" alt="social" />
                                <img src="/images/icons/Ok.svg" alt="social" />
                                <img src="/images/icons/Vk.svg" alt="social" />
                            </div>
                        </WraperLinks>
                    </WraperContent>


                </Right>
            </Wraper>

        </Section>
    )
}

export default Contacts;

const WraperContent = styled.div`
    @media (max-width: 1000px){
        .wraperContacts {
            display: flex;
        }

        hr {
            display: none;
        }
    }


    @media (max-width: 760px){
        .wraperContacts {
            display: block;
        }

        hr {
            display: block;
        }
    }
`;

const Section = styled.section`
    span {
        font-weight: 800;
        font-style: italic;
    }

    padding-bottom: 150px;
    position: relative;

    @media (max-width: 1250px){
        padding-bottom: 100px;
    }
`;

const Wraper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px){
        display: block;
    }

    @media (max-width: 760px){
        display: block;
        margin-top: 15px;
    }
`;

const Left = styled.div`
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px){
        justify-content: flex-start;
        margin-bottom: 30px;
        width: fit-content;
    }

    @media (max-width: 760px){
        display: none;
    }
`;

const WraperContact = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 0;

    p {
        font-size: 18px;
        font-weight: 800;
        color: white;
        margin-left: 15px;
        min-width: 320px;
    }

    @media (max-width: 1250px){
        p {
            min-width: 250px;
            font-size: 16px; 
        }
    }

    @media (max-width: 760px){
        p {
            min-width: 100%;
            font-size: 16px; 
        }
    }

   

`;

const Right = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    padding: 34px 50px;
    width: fit-content;
    h3 {
        margin-bottom: 20px;
    }

    hr {
        margin: 20px 0;
        border: #39393e 1px solid;
    }

    @media (max-width: 1250px){
        border-radius: 0px 10px 10px 0px;
        position: absolute;
        right: 0;
        padding: 37px 30px;
    }

    @media (max-width: 1000px){
        border-radius: 10px;
        position: relative;
    }

    @media (max-width: 760px){
        width: 100%;
    }
`;

const WraperLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 20px;

    img {
        margin-left: 10px;
    }

    a {
        font-weight: 400;
    }

    @media (max-width: 480px){
        display: block;

        img {
            margin-left: 0;
            margin-right: 10px;
            margin-top: 20px;
        }
        
    }
`;