
import axios from 'axios';

export const fetchAdmin = async (values, navigate, callback) => {
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
    localStorage.setItem(
        "token",
        JSON.stringify(response.data.token),
      );
    navigate('/admin');
    callback();
})
.catch(error => {
    console.error('There was an error!', error);
    alert(error.response.data.message)
    callback();
});
  };
  