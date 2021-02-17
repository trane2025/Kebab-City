const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';



const initialState = {
    open: false
}


const mobileMenu = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MOBILE_MENU:
            return {
                open: action.value
            }
        default: return state
    }
}

export default mobileMenu;

export const toggleMobileMenu = (value) => ({ type: TOGGLE_MOBILE_MENU, value });