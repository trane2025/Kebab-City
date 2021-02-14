import Head from 'next/head';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useRouter } from 'next/router';
import BasketContainer from '../Basket/BasketContainer';
import { connect } from 'react-redux';
import { basketToggle } from '../../store/redusers/basket';
import { useEffect, useState, useRef } from 'react';

const links = [
    { label: 'Главная', href: '/' },
    { label: 'Меню', href: '/menu-cafe' },
    { label: 'О кафе', href: '#' },
    { label: 'Доставка шашлыка', href: '/#how-delivery' },
    { label: 'Условия доставки', href: '/#terms-delivery' },
    { label: 'Контакты', href: '/#contact' },
]

const useUpdateEffect = (fn, deps) => {
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) {
            fn()
        }
        else ref.current = true;
    }, deps)
}


function Layout({ children, title = 'Kebab-city', description, basketToggle, countProducts }) {

    const { route } = useRouter();

    const toggleBasketHandler = (value) => {
        basketToggle(value);
    }

    const [animate, setAnimate] = useState('');

    useUpdateEffect(() => {
        setAnimate('animated shake fast');
        setTimeout(() => {
            setAnimate('');
        }, [500])
    }, [countProducts])

    return (
        <>
            <Head>
                <title>{`${title}`}</title>
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
            </Head>
            <BasketContainer />
            <Navbar
                links={links}
                route={route}
                toggleBasketHandler={toggleBasketHandler}
                countProducts={countProducts}
                animate={animate}
                setAnimate={setAnimate} />

            {children}
            <Footer links={links} route={route} />
        </>
    )
}

const mapStateToProps = (state) => ({
    countProducts: state.basket.countProducts
})

export default connect(mapStateToProps, { basketToggle })(Layout) 