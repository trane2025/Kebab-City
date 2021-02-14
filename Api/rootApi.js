import axios from "axios";

export const rootAPI = {
    getProduct(type = '') {
        return axios.get(`https://server.cafeshm.ru/app.php?page=delivery&type=${type}`).then(respone => respone.data)
    }
}