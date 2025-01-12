import axios from "../utils/request";
import path from "./path";

const api = {
    // auth

    // book
    getBook(id){
        return axios.get(path.baseUrl + path.book + "/" + id);
    },
    getBooks(){
        return axios.get(path.baseUrl + path.books);
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