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
                    <WraperContact>
                        <img src="/images/icons/geolocation.png" alt="icon" />
                        <p>ул.Славянская 20</p>
                    </WraperContact>
                    <WraperContact>
                        <img src="/images/icons/phone.png" alt="icon" />
                        <p>+7 (8512) 777 999</p>
                    </WraperContact>
                    <hr />
                    <WraperContact>
                        <img src="/images/icons/geolocation.png" alt="icon" />
                        <p>Медногорская, 121</p>
                    </WraperContact>
                    <WraperContact>
                        <img src="/images/icons/phone.png" alt="icon" />
                        <p>+7 (8512) 777 999</p>
                    </WraperContact>
                    <WraperLinks>
                        <a target='_blank' href='https://yandex.ru/maps/?um=constructor%3A625558781eb151d6a95220764072d9f7d556052ae1eb4ee4a2c2adcd7f17167f&source=constructorLink'>Посмотреть в яндексе</a>
                        <div>
                            <img src="/images/icons/instagram.svg" alt="social" />
                            <img src="/images/icons/Ok.svg" alt="social" />
                            <img src="/images/icons/Vk.svg" alt="social" />
                        </div>
                    </WraperLinks>
                </Right>
            </Wraper>

        </Section>
    )
}

export default Contacts;

const Section = styled.section`
    span {
        font-weight: 800;
        font-style: italic;
    }

    padding-bottom: 150px;
`;

const Wraper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
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
    }

`;

const Right = styled.div`
    border-radius: 10px;
    background-color: rgb(29, 29, 37);
    width: 472px;
    height: 452px;
    padding: 30px 50px;

    h3 {
        margin-bottom: 20px;
    }

    hr {
        margin: 20px 0;
        border: #39393e 1px solid;
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
`;