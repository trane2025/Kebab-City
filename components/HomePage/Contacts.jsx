import React from 'react';
import styled from 'styled-components';

function Contacts() {
    return (
        <Section id='contact'>
            <h2>Контактная <span>информация</span></h2>
            <Wraper>
                <Left>
                    <img src="/images/Contacts/Geolocation.png" alt="geolocation" />
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
                        <a target='_blank' href='https://yandex.ru/maps/?um=constructor%3Ad0279d8ac96cf3dec4afadd9d2e8d47ba0205fe4b09642625f517362e33ecbfb&source=constructorLink'>Посмотреть в яндексе</a>
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