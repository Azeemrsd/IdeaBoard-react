import axios from 'axios';
const instance = axios.create({
    baseURL:'https://ideaboard-de7d9.firebaseio.com/'
});
export default instance