

import axios from 'axios';
export const fetchSupervisors = async (values, navigate) => {
  axios.post('https://uil-tp.com.ng/login/supervisor-login', {
    staff_id:values.staff_id,
    password:values.password
}, {
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => {
    console.log(response);
    localStorage.setItem(
        "token",
        JSON.stringify(response.data.token),
      );
   navigate('/lecturer');
})
.catch(error => {
    console.error('There was an error!', error);
    alert(error.response.data.message)
});
  };
  