import axios from 'axios';
export function GetSearch(keyword) {
    console.log('https://my-json-server.typicode.com/dudusae/demo/' + keyword);
    return axios.get('https://my-json-server.typicode.com/dudusae/demo/' + keyword);}

export function GetSuggestList(keyword) {
    console.log('https://my-json-server.typicode.com/dudusae/demo/gangnam');
    return axios.get('https://my-json-server.typicode.com/dudusae/demo/gangnam');}

export function GetDetail(keyword) {
    console.log('https://my-json-server.typicode.com/dudusae/demo/' + keyword);
    return axios.get('https://my-json-server.typicode.com/dudusae/demo/' + keyword);}
    