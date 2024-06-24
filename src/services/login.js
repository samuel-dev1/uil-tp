import axios from 'axios';

export const fetchLogin = async (values) => {
  axios.post('https://uil-tp.com.ng/login/login-students', {
    matric_no:values.matric_no,
    password:values.password
}, {
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => {
    console.log(response);
    // alert(response.data.message)
})
.catch(error => {
    console.error('There was an error!', error);
    alert(error.response.data.message)
});
  };
  