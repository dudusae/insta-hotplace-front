import axios from 'axios';

export function GetSearch(keyword) {
    console.log('http://13.209.75.199/areas/' + keyword);
    return axios.get('http://13.209.75.199/areas/'+ keyword);}

export function GetSuggestList(keyword) {
    console.log('http://13.209.75.199/areas');
    return axios.get('http://13.209.75.199/areas');}        