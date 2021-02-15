import { useEffect, useRef, useState } from "react";
import { rootAPI } from "../Api/rootApi";
import Layout from "../components/layout/Layout";
import MenuCafe from "../components/MenuCafe/MenuCafe";
import Prelouder from "../components/UI/Prelouder";


function menuCafe({ res, countProducts }) {
    const count = useRef(true);

    const title = 'Заказать шашлык в Астрахани';





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
