
import categoriesData from '../../mockData/categories.json';
import customerData from '../../mockData/customers.json';
import productData from '../../mockData/products.json';

import { QUERY_LIST_KEY, MAX_QUERY_LIST } from '../../constant';

const ALL_DATA_POINT = [categoriesData, customerData, productData];

export const getSqlData = (query) => {
    return new Promise((res, rej) => {
        const randomLimit = ALL_DATA_POINT.length-1;
        const randomNumber = Number.parseInt(Math.random()*100) % randomLimit
        try{
            console.log(ALL_DATA_POINT.sort(() => Math.random() - 0.5));
            res(ALL_DATA_POINT.sort(() => Math.random() - 0.5)[0]);
        } catch(err) {
            rej(new Error('Data is not available!!!'));
        }
    })
}; 

export const saveQueryInCache = (query) => {
    return new Promise((res, rej) => {
        let historyArr = getHistoryOfQuery();
        try{
            historyArr.unshift(query);
            historyArr = historyArr.slice(0, Number.parseInt(MAX_QUERY_LIST)); 
            localStorage.setItem(QUERY_LIST_KEY, JSON.stringify(historyArr));
            res(historyArr);
        } catch(err) {
            rej([]);
        }
    })
}

export const getHistoryOfQuery = () => {
    let queryHistory = localStorage.getItem(QUERY_LIST_KEY) || '[]';
    return JSON.parse(queryHistory);
};
