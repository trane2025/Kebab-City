import styled from 'styled-components';
import Button from './ButtonLink';

function SuccessOrder() {
    return (
        <Section>
            <WraperOrder>
                <h2>Ваша заявка <span className='titleOrder-style'>принята!</span></h2>
                <p>Наш оператор свяжется с Вами для уточнения деталей заказа</p>
                <Button href={'/'}>Хорошо. Жду звонка</Button>
            </WraperOrder>
        </Section>
    )
}

export default SuccessOrder


const WraperOrder = styled.div`
    padding: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url('/images/OrderSuccess/background.jpg') bottom center no-repeat;
    background-size: cover;
    background-color: #13131a;
    animation-name: fade;
    animation-duration: .3s;

    h2 {
        font-size: 36px;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        width: 320px;
        text-align: center;
    }

    .titleOrder-style {
        color: #f7c77e;
    }

    @media (max-width: 640px){
        h2 {
            font-size: 24px;
        }

        p {
            font-size: 16px;
            width: 250px;
        }
    }

    @media (max-width: 400px){
        padding: 30px;
        h2 {
            font-size: 24px;
        }

        p {
            font-size: 16px;
            width: 250px;
        }
    }
`;

const Section = styled.div`
  background-color: rgb(11 11 14 / 95%);
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 11;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: fade;
  animation-duration: .3s;
`;