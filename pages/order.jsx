import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout/Layout';
import OrderLayout from '../components/Order/OrderLayout';
import { basketToggle } from '../store/redusers/basket';


function order({ basketToggle, products, countProducts }) {

    const [productsBasket, setProductsBasket] = useState({});

    useEffect(() => {
        setProductsBasket(products);
    }, [products])



    return (
        <Layout basket>
            <OrderLayout productsBasket={productsBasket} countProducts={countProducts} basketToggle={basketToggle} />
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    products: state.basket.products,
    countProducts: state.basket.countProducts
})

export default connect(mapStateToProps, { basketToggle })(order);

