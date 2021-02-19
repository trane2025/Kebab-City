import styled from 'styled-components';
import Button from '../UI/Button';
import Count from '../UI/Count';

function CardProduct({ picture, title, price, unit, portion, minPortion, addProductBasket, removeCountPortion, addCountPortion, volume, price_volume }) {
    return (
        <Card>
            <WraperImage>
                <img src={picture} alt="фото еды" />
            </WraperImage>
            <ul>
                <li>
                    <h4>{title}</h4>
                </li>
                <li>
                    <Count countPortion={minPortion} unit={unit} removeCountPortion={removeCountPortion} addCountPortion={addCountPortion} />
                    <Price>
                        <span>{`Цена за ${price_volume}`}</span>
                        {`${price} руб.`}
                    </Price>
                </li>
                {volume !== '' &&
                    <li>
                        <Volume>
                            {volume}
                        </Volume>
                    </li>}

            </ul>
            <WraperButton>
                <Button onClick={addProductBasket}>Добавить в корзину</Button>
            </WraperButton>
        </Card >


    )
}

export default CardProduct;



const Volume = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-top: 15px;
    color: #6e6e6e;
    font-style: italic;
`;

const Price = styled.p`
    color: white;
    font-weight: 800;
    font-size: 20px;
    

    span {
        font-size: 12px;
        font-weight: 400;
        color: #dfdfdf;
        display: block;
        margin-bottom: 10px;
    }
    
`;

const WraperButton = styled.div`
    display: flex;
    justify-content: center;
`;

const WraperImage = styled.div`
    
    height: 178px;
    width: 270px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 270px;
        transition-duration: 0.4s;
    }
    
`;

const Card = styled.li`
    background: #1d1d25;
    padding-bottom: 25px;
    border-radius: 10px;
    overflow: hidden;
    margin: 15px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
        margin: 10px 0;
        max-width: 200px;
        word-break: break-word;
    }

    ul {
        padding: 0px 30px;
        margin-bottom: 10px;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    

    :hover {
        img {
            transform: scale(1.3);
        }
    }

    
`;


