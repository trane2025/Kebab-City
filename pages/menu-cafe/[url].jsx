import { rootAPI } from "../../Api/rootApi";
import Layout from "../../components/layout/Layout";
import MenuCafe from "../../components/MenuCafe/MenuCafe";


function menuCafe({ res }) {

    console.log(res);

    const title = 'main';




    return (
        <Layout title={title}>
            <MenuCafe links={res.catGoods} products={res.goods} />
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
