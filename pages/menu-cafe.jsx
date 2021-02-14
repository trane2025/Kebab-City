import { useState } from "react";
import { connect } from "react-redux";
import { rootAPI } from "../Api/rootApi";
import Layout from "../components/layout/Layout";
import MenuCafe from "../components/MenuCafe/MenuCafe";
import basket, { basketToggle } from "../store/redusers/basket";


function menuCafe({ res, countProducts }) {

    const title = 'Заказать шашлык в Астрахани'


    return (
        <Layout title={title}>
            <MenuCafe
                links={res.catGoods}
                products={res.goods}
                title={title}
                countProducts={countProducts} />
        </Layout>
    )
}

export default menuCafe;

export async function getServerSideProps() {

    const res = await rootAPI.getProduct();

    return {
        props: {
            res
        }
    }
}
