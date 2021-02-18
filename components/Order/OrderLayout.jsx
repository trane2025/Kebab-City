import { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import BasketContainer from '../Basket/BasketContainer';
import Button from '../UI/Button';
import CheckBox from '../UI/CheckBox';
import Container from '../UI/Container';
import Input from '../UI/Input';
import InputPhoneMask from '../UI/InputPhoneMask';
import Select from '../UI/Select';
import TextArea from '../UI/TextArea';

import reduser, { setHowDelivery, setName, setPhone, setAddress, setPickUpAddress, setComment, setProducts } from './reduser';



const initialState = {
    howDelivery: 'Доставка',
    name: '',
    phone: '',
    addressDelivery: '',
    pickUpAddress: '',
    comment: '',
    products: {}
}

function OrderLayout({ productsBasket, countProducts, basketToggle }) {

    useEffect(() => {
        dispatch(setProducts(productsBasket));
    }, [productsBasket])

    const [state, dispatch] = useReducer(reduser, initialState);


    const onChangehowDelivery = (value) => {
        dispatch(setHowDelivery(value));
    }

    const setPickUpAddressHandler = (value) => {
        dispatch(setPickUpAddress(value));
    }

    const postOrder = (event) => {
        event.preventDefault();

        console.log(state);
    }


    return (
        <Section>
            <Container>

                <FlexContainer>
                    <form onSubmit={event => postOrder(event)}>
                        <h2>Оформление заказа</h2>
                        <WraperElem>
                            <ItemElem>
                                <Input
                                    label='Ваше имя'
                                    placeholder='Введите ваше имя'
                                    value={state.name} onChange={(event) => dispatch(setName(event.target.value))} />
                            </ItemElem>

                            <ItemElem>
                                <InputPhoneMask
                                    label='Ваш телефон'
                                    placeholder='+7(___) ___-__-__'
                                    value={state.phone} onChange={(event) => dispatch(setPhone(event.target.value))} />
                            </ItemElem>

                            <ItemElem>
                                <CheckBox
                                    name='how-delivery'
                                    checkBoxArr={[
                                        { id: 'delivery', label: 'Доставка', defaultChecked: true, },
                                        { id: 'your-self', label: 'Самовывоз', defaultChecked: false }
                                    ]
                                    }
                                    method={onChangehowDelivery}

                                >Как вы хотите получить заказ ?</CheckBox>
                            </ItemElem>

                            {state.howDelivery === 'Доставка' &&
                                <ItemElem>
                                    <Input
                                        label='Ваш адрес'
                                        placeholder='Например: Бульвар Победы, дом 40, кв. 32'
                                        value={state.addressDelivery} onChange={(event) => dispatch(setAddress(event.target.value))} />
                                </ItemElem>}

                            {state.howDelivery === 'Самовывоз' &&
                                <ItemElem>
                                    <Select
                                        label='Адрес кафе'
                                        options={[
                                            { value: 'Выберите заведение' },
                                            { value: 'ул.Славянская 20' },
                                            { value: 'ул. Медногорская, 121' },
                                        ]}
                                        method={setPickUpAddressHandler}
                                    />
                                </ItemElem>}

                            <ItemElem>
                                <TextArea
                                    label='Комментарий к заказу'
                                    placeholder='Напишите дополнительную и уточняющую информацию, если считаете нужным это указать (необязательно)'
                                    value={state.comment} onChange={(event) => dispatch(setComment(event.target.value))} />
                            </ItemElem>

                            <ItemElem>
                                <BasketWraper>
                                    <Button type='submit' top='0'>Оформить заказ</Button>
                                    <BasketIcon onClick={() => basketToggle(true)}>
                                        <img src="/images/icons/backet-icon.svg" alt="basket" />
                                        {!!countProducts &&
                                            <div className="count-basket-products">
                                                <p>{countProducts}</p>
                                            </div>
                                        }
                                    </BasketIcon>
                                </BasketWraper>
                            </ItemElem>


                        </WraperElem>
                    </form>
                    <BasketContainer basket />
                </FlexContainer>

            </Container>
        </Section>

    )
}

export default OrderLayout;

const BasketWraper = styled.div`
    display: flex;
`;

const BasketIcon = styled.div`
    position: relative;
    margin-left: 50px;
    display: none;
    cursor: pointer;
    z-index: 10;

    img {
        width: 60px;
        height: 60px;
    }

    .count-basket-products {
        border-radius: 50%;
        background-color: white;
        width: 35px;
        height: 35px;
        position: absolute;
        right: -8px;
        bottom: -12px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgb(18 18 18 / 27%) -3.41px 3.657px 8.19px 0.81px;

        p {
            color: #1b1b1b;
            font-weight: 800;
            font-size: 16px;
        }

    }

    @media ( max-width: 1250px) {
        display: flex;
    }

    @media ( max-width: 400px) {
        margin-left: 10px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ItemElem = styled.li`
    margin-bottom: 30px;

    @media (max-width: 1000px){
        margin-bottom: 15px;
    }
`;

const WraperElem = styled.ul`
    padding-top: 50px;

    @media (max-width: 1000px){
        padding-top: 30px;
    }
`;

const Section = styled.div`
    background: url('/images/background/back.jpg') top center repeat-y;
    background-color: #1d1d25;
    position: relative;
    padding: 50px 0;

    @media (max-width: 1000px){
        padding: 30px 0;
    }
`;


