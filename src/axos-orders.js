import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-37337.firebaseio.com/'
})

export default instance