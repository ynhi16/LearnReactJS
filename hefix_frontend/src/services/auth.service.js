import axiosClient from '../httpClient/axiosClient.js';

class AuthService {
    register(account) {
        return axiosClient.post('/auth/register', account);
    }
    signin(account) {
        return axiosClient.post('/auth/signin', account);
    }
    forgotPassword(email) {
        return axiosClient.post('/auth/forgot-password', email);
    }
    resetPassword(account) {
        return axiosClient.post('/auth/reset-password', account);
    }
    showPosts(posts) {
        return axiosClient.get('customer/show-posts', posts);
    }
}

export default new AuthService();