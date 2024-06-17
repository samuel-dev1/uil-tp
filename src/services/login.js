// import { request } from '../utils/index'
import axios from 'axios';

export const fetchLogin = async (values) => {
  axios.post('https://uil-tp.com.ng/auth/supervisor-login', {
    // Your data here
    values,
}, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN' // if needed
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error('There was an error!', error);
});
  };
  