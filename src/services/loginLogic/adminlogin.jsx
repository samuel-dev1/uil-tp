

import axios from 'axios';
export const fetchAdmin = async (values) => {
  axios.post('https://uil-tp.com.ng/login/admin', {
    staff_id:values.staff_id,
    password:values.password
}, {
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => {
    alert(response.data.message)
})
.catch(error => {
    console.error('There was an error!', error);
    alert(error.response.data.message)
});
  };
  