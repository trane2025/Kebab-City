import { useState } from 'react';
import { connect } from 'react-redux';
import { setProductBasket } from '../../store/redusers/basket';
import CardProduct from './CardProduct';


function CardProductContainer({ product, setProductBasket }) {

    console.log(product);

    const BASKET_KEY = `${product.id}-${product.title}`;

    const [selectedPortion, setSelectedPortion] = useState(+product.min_portion);

    const addProductBasket = () => {

        const basketProducts = {

            [BASKET_KEY]: {
                ...product,
                selectedPortion,
                key: BASKET_KEY,
                selectedPrice: product.price * selectedPortion / product.portion
            }
        }
        setProductBasket(basketProducts);
    }

    const addCountPortion = () => {
        setSelectedPortion(pre => pre + +product.portion);
    }

    const removeCountPortion = () => {
        if (selectedPortion > +product.min_portion) {
            setSelectedPortion(pre => pre - +product.portion);
        }
    }

    return (
        <CardProduct
            picture={product.picture}
            title={product.title}
            price={product.price}
            unit={product.unit}
            portion={product.portion}
            minPortion={selectedPortion}
            addProductBasket={addProductBasket}
            addCountPortion={addCountPortion}
            removeCountPortion={removeCountPortion}
            volume={product.volume}
            price_volume={product.price_volume} />
    )
}



export default connect('', { setProductBasket })(CardProductContainer);
