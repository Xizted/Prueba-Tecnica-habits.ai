import axios from 'axios';

const BASE_URL = 'https://order-pizza-api.herokuapp.com/api'
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios.create({
    baseURL: BASE_URL,
})
