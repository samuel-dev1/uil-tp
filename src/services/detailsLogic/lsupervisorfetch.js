
import axios from 'axios';
export const fetchSupervisors = async (values) => {
  axios.post('https://uil-tp.com.ng/login/supervisor-login', {
    staff_id:values.staff_id,
    password:values.password
},

{
    headers: {
        'Content-Type': 'application/json',
        "token":values.token
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
  

