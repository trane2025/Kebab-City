import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { basketToggle, deleteProductBasket, setProductBasket } from '../../store/redusers/basket';
import Basket from './Basket';
import BasketOrder from './BasketOrder';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


export const useUpdateEffect = (fn, deps) => {
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) {
            fn()
        }
        else ref.current = true;
    }, deps)
}


function BasketContainer({ open, basketToggle, products, setProductBasket, deleteProductBasket, allPrice, basket }) {




    useEffect(() => {
        const checkBasket = localStorage.getItem('basket');

        if (!checkBasket) {
            localStorage.setItem('basket', '{}');
        }
    }, []);

    useEffect(() => {
        const basketProducts = JSON.parse(localStorage.getItem('basket'));
        setProductBasket(basketProducts);
    }, []);

    useUpdateEffect(() => {
        localStorage.setItem('basket', JSON.stringify(products));
    }, [products]);

    const deleteProduct = (key) => {
        let basketProducts = JSON.parse(localStorage.getItem('basket'));
        delete basketProducts[key];
        deleteProductBasket(basketProducts);
    }

    const addCountPortion = (product) => {

        const selectedPortion = +product.selectedPortion + +product.min_portion;

        const newProduct = {
            ...product,
            selectedPortion,
            selectedPrice: (product.price * selectedPortion) / product.portion
        }

        const newProductBasket = {
            ...products,
            [product.key]: newProduct
        }

        setProductBasket(newProductBasket);
    }

    const removeCountPortion = (product) => {

        if (product.selectedPortion > +product.min_portion) {

            const selectedPortion = +product.selectedPortion - +product.min_portion;

            const newProduct = {
                ...product,
                selectedPortion,
                selectedPrice: (product.price * selectedPortion) / product.portion
            }

            const newProductBasket = {
                ...products,
                [product.key]: newProduct
            }

            setProductBasket(newProductBasket);
        }
    }

    if (basket) {
        return (
            <BasketOrder
                open={open}
                basketToggle={basketToggle}
                products={products}
                deleteProduct={deleteProduct}
                addCountPortion={addCountPortion}
                removeCountPortion={removeCountPortion}
                allPrice={allPrice}
                numberWithSpaces={numberWithSpaces} />
        )
    }
    else {
        return (
            <Basket
                open={open}
                basketToggle={basketToggle}
                products={products}
                deleteProduct={deleteProduct}
                addCountPortion={addCountPortion}
                removeCountPortion={removeCountPortion}
                allPrice={allPrice}
                numberWithSpaces={numberWithSpaces} />
        )
    }
}

const mapStateToProps = (state) => ({
    open: state.basket.open,
    products: state.basket.products,
    allPrice: state.basket.countPrice
})



export default connect(mapStateToProps, { basketToggle, setProductBasket, deleteProductBasket })(BasketContainer);
