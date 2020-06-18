import axios from 'axios';
import * as Config from '../Constants/Config';


export default function callApi02(endpoint, method = 'GET', body, token) {
    return axios({
        headers: { "Authorization": `Bearer ${token}` },
        method: method,
        url: `${Config.API_URL02}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}