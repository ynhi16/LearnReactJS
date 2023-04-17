import axios from 'axios';
const token = localStorage.getItem('access_token');
console.log(token, 'token');
const axoisClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: { 'Authorization': `Bearer ${token}` }
});
export default axoisClient;