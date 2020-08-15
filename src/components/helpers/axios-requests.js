import axios from 'axios';

const postData = (url, payload) => {
    return axios.post(url, payload)
};

export default postData;