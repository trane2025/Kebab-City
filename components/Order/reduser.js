const SET_HOW_DELIVERY = 'SET_HOW_DELIVERY';
const SET_NAME = 'SET_NAME';
const SET_PHONE = 'SET_PHONE';
const SET_ADDRESS = 'SET_ADDRESS';
const SET_PICK_UP_ADDRESS = 'SET_PICK_UP_ADDRESS';
const SET_COMMENT = 'SET_COMMENT';
const SET_PPRODUCTS = 'SET_PPRODUCTS';
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';


const reduser = (state, action) => {
    switch (action.type) {
        case SET_HOW_DELIVERY:
            return {
                ...state,
                howDelivery: action.value
            }
        case SET_NAME:
            return {
                ...state,
                name: action.value
            }
        case SET_PHONE:
            return {
                ...state,
                phone: action.value
            }
        case SET_ADDRESS:
            return {
                ...state,
                addressDelivery: action.value
            }
        case SET_PICK_UP_ADDRESS:
            return {
                ...state,
                pickUpAddress: action.value
            }
        case SET_COMMENT:
            return {
                ...state,
                comment: action.value
            }
        case SET_PPRODUCTS:
            return {
                ...state,
                products: action.obj
            }
        case SET_INITIAL_STATE:
            return {
                ...action.obj
            }
        default:
            return state
    }
}

export default reduser;

export const setHowDelivery = (value) => ({ type: SET_HOW_DELIVERY, value })
export const setName = (value) => ({ type: SET_NAME, value })
export const setPhone = (value) => ({ type: SET_PHONE, value })
export const setAddress = (value) => ({ type: SET_ADDRESS, value })
export const setPickUpAddress = (value) => ({ type: SET_PICK_UP_ADDRESS, value })
export const setComment = (value) => ({ type: SET_COMMENT, value })
export const setProducts = (obj) => ({ type: SET_PPRODUCTS, obj })
export const setInitialState = (obj) => ({ type: SET_INITIAL_STATE, obj })