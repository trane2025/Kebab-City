import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { useMemo } from 'react';
import basket from './redusers/basket';
import mobileMenu from './redusers/mobileMenu';



let store

const initialState = {};



//СЮДА СКЛАДЫВАТЬ РЕДЬЮСЕРЫ
const reducers = combineReducers({
    basket,
    mobileMenu
})



function initStore(preloadedState = initialState) {
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // После перехода на страницу с начальным состоянием Redux объедините это состояние
    // с текущим состоянием в store и создайте новый store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // Для SSG и SSR всегда создавайте новый store
    if (typeof window === 'undefined') return _store
    // Создайте store один раз в клиенте
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
