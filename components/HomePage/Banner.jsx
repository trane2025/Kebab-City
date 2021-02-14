import styled from 'styled-components';
import Button from '../UI/ButtonLink';
import Container from '../UI/Container';

function Banner() {
    return (
        <Section>
            <Container>
                <Wraper>
                    <WraperText>
                        <h1>Доставка</h1>
                        <h2>Шашлык на мангале</h2>
                        <h2 className='primery-color'>Мясо на тандыре</h2>
                        <h3>Национальные блюда и обеды</h3>
                        <Button href='/menu-cafe'>Перейти в меню</Button>
                        <ButtonSubTitle>
                            <i>
                                <svg
                                    width="30.5px" height="51.5px">
                                    <path fillRule="evenodd" stroke="rgb(255, 255, 255)" strokeWidth="1px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                                        d="M29.203,50.090 C29.203,50.090 -6.350,48.570 2.864,1.138 " />
                                </svg>
                            </i>
                            <p>Кухня мастера готовит самые вкусные <br /> шашлыки в Астрахани <span>убедитесь в этом сами</span></p>
                        </ButtonSubTitle>
                    </WraperText>
                    <Meat>
                        <img className='img-meat' src="/images/banner/Meat.png" alt="Мясо" />
                        <img className='light-meat' src="/images/banner/light-meat.png" alt="Мясо" />
                    </Meat>
                </Wraper>

            </Container>
        </Section >
    )
}

export default Banner;


const ButtonSubTitle = styled.div`
    margin-left: 10px;
    margin-top: 8px;
    display: flex;
    align-items: flex-end;

    i {
        margin-right: 10px;
    }
    
    p {
        position: relative;
        top: 16px;
    }
    
    span {
        font-weight: 800;
        color: white;
    }
`;

const Meat = styled.div`
    position: relative;
    .img-meat {
        z-index: 2;
        position: relative;  
    }

    .light-meat {
        position: absolute;
        bottom: -40px;
        left: -140px;
        z-index: 1;
    }
`;

const Section = styled.section`
    background: url('/images/banner/Banner-back.png') no-repeat center top;
    
`;

const Wraper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const WraperText = styled.div`
    padding: 100px 0 150px 0;

    h1 {
        font-size: 60px;
        color: #f7c77e;
    }

    .primery-color {
        color: #f7c77e;
    }

    h3 {
        font-size: 36px;
        font-style: italic;
        font-weight: 400;
        margin-top: 10px; 
    }

    
`;