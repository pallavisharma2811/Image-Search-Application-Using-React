import axios from 'axios';
 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {//object
        Authorization: 'Client-ID 0Uidgr5omyZBlK5iU9DZzpUGNT0SvmTAjkwga-kthoo' 
    }

});