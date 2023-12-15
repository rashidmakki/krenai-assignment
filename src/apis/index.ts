import axios from "axios";
import * as apiPaths from './apiPath';

const API  = axios.create({
    baseURL: "",
    headers: {
        "Accept": "Application/json",
        "content-type": "Application/json"
    }
});

API.interceptors.request.use((request)=>{
    return request;
});


export const productList = (payload:any) => API.get(apiPaths.productListUrl,payload)