import axios from "axios";

export const rootAPI = {
    getProduct(type = '') {
        return axios.get(`https://server.devichyabashnya.ru/app.php?page=delivery&type=${type}`).then(response => response.data)
    },
    postDelivery(order) {
        return (
            axios.post('https://server.devichyabashnya.ru/mailto/app.php', `order=${order}`).then(response => response.data)
        )
    }
}