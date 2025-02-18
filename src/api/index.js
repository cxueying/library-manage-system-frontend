import axios from "../utils/request";
import path from "./path";

const api = {
    // auth
    register(data) {
        return axios.post(path.baseUrl + path.register, data);
    },
    login(data) {
        return axios.post(path.baseUrl + path.login, data);
    },

    // book
    getBook(id){
        return axios.get(path.baseUrl + path.book + "/" + id);
    },
    getBooks(){
        return axios.get(path.baseUrl + path.books);
    },
    getLendHistory(userId) {
        return axios.get(path.baseUrl + path.lendHistory + "/" + userId);
    },
    borrowBook(userId, bookId) {
        return axios.post(path.baseUrl + path.borrow, { userId, bookId });
    },
    returnBook(userId, bookId) {
        return axios.post(path.baseUrl + path.return, { userId, bookId });
    },

    // user
    getUser(id){
        return axios.get(path.baseUrl + path.user + "/" + id);
    },
    getUserInfo(id){
        console.log("index.js" + id);
        
        return axios.get(path.baseUrl + path.userInfo + "/" + id);
    },
    updateUser(id, data){
        return axios.put(path.baseUrl + path.userupdate + "/" + id, data);
    },

    // other
}

export default api;