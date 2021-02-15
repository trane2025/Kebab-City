import { useEffect, useState } from "react";
import { rootAPI } from "../../Api/rootApi";
import Layout from "../../components/layout/Layout";
import MenuCafe from "../../components/MenuCafe/MenuCafe";


function menuCafe({ res, title }) {


    return (
        <Layout title={title}>
            <MenuCafe links={res.catGoods} products={res.goods} title={title} />
        </Layout>
    )
}

export default menuCafe;

export async function getServerSideProps({ query }) {

    const res = await rootAPI.getProduct(query.url).then(response => {
        return response
    })



    const linkArr = res.catGoods.find(item => item.url === query.url);


    return {
        props: {
            res,
            query: query.url,
            title: linkArr.title
        }
    }
}
