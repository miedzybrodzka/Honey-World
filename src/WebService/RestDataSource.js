import Axios from "axios";
import {baseUrl} from './baseUrl';

export class RestDataSource {

    getData = (endUrl, callback, params) =>{
        this.sendRequest('get', `${baseUrl}${endUrl}`, callback, params);
    }

    getOne = (endUrl, callback, id) => {
        this.sendRequest('get', `${baseUrl}${endUrl}/${id}`, callback);
    }

    updateProduct(endUrl, callback, data) {
        this.sendRequest('put', `${baseUrl}${endUrl}/${data.id}`, callback, undefined, data);
    }

    sendRequest = (method, url, callback, params, data) =>{
        Axios.request({
            method,
            url,
            params,
            data
        })
        .then(response => callback(response));

    }
}