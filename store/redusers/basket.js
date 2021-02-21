const BASKET_TOGGLE = 'BASKET_TOGGLE';
const SET_PRODUCT_BASKET = 'SET_PRODUCT_BASKET';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CLEAR_BASKET = 'CLEAR_BASKET';


const initialState = {
    open: false,
    products: {},
    countPrice: 0,
    countProducts: 0
}

const basket = (state = initialState, action) => {
    switch (action.type) {
        case BASKET_TOGGLE:
            return {
                ...state,
                open: action.value
            }
        case SET_PRODUCT_BASKET:
            const newProductsBasket = {
                ...state.products,
                ...action.obj
            }

            return {
                ...state,
                products: newProductsBasket,
                countPrice: setCount(newProductsBasket),
                countProducts: setCountProducts(newProductsBasket)
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                products: action.obj,
                countPrice: setCount(action.obj),
                countProducts: setCountProducts(action.obj)
            }
        case CLEAR_BASKET:
            return initialState;

        default: return state
    }
}

export default basket;

export const basketToggle = (value) => ({ type: BASKET_TOGGLE, value });
export const setProductBasket = (obj) => ({ type: SET_PRODUCT_BASKET, obj });
export const deleteProductBasket = (obj) => ({ type: DELETE_PRODUCT, obj });
export const clearBasket = () => ({ type: CLEAR_BASKET });



const setCount = (obj) => {
    return Object.keys(obj).reduce((summ, key) => {
        const product = obj[key];
        return product.selectedPrice + summ
    }, 0);
}

const setCountProducts = (obj) => {
    return Object.keys(obj).length;
}