import axios from 'axios';
const API = 'https://64cfeb54ffcda80aff524be7.mockapi.io/api/callsList';

const getListItems = {
    get: (id) => axios(API + (id ? `/${id}` : '')).then(({data}) => data),
    delete: (id) => axios.delete(API+`/${id}`).then(({data}) => data),
    put: (id, obj) => axios.put(API+`/${id}`, obj).then(({data}) => data),
    post: (obj) => axios.post(API, obj).then(({data}) => data)
};

export default getListItems;