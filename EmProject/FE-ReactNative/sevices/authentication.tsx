import axios from "axios";
import * as SecureStore from 'expo-secure-store'

export const BASE_URL='http://192.168.201.136:8080/';




export const setAccessToken = async(accessToken : string) => {
    if(!accessToken) {
        return false
    }
    try {
        await SecureStore.setItemAsync('accessToken', accessToken)
        addTokenToAxios(accessToken)
        return true
    } catch(error) {
        console.log("Lỗi khi lưu token", error)
    }
    return false
}

export const getAccessToken = async() => {
    try {
        const accessToken = await SecureStore.getItemAsync('accessToken')
        return accessToken
    } catch (error) {
        console.log("Lỗi khi lưu token", error)
    }
    return false
}



export const addTokenToAxios = (accessToken: string) => {
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${accessToken}`
        // config.headers.Authorization = `123456789`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })
}