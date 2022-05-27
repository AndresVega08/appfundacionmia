import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { set } from 'react-native-reanimated';
import {BASE_URL} from '../config';
const [userInfo, setUserInfo] = useState({});
const [isLoading, setIsLoading] = useState(false);

export const AuthContext = createContext();


const login = (email, password) => {
    setIsLoading(true);

    axios.post(`${BASE_URL}/Login`, {
        email, 
        password,
    }).then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(useInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
    }).catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
    });

};
