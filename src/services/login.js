import axios from 'axios';



export const fetchLogin = async (values, navigate, callback) => {
  axios.post('https://uil-tp.com.ng/login/login-students', {
    matric_no:values.matric_no,
    password:values.password
}, {
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    if(response.data.user.type === "tp"){
        navigate('/tp');
    }else if(response.data.user.type === "ob"){
        navigate('/pt');
    }
    alert(response.data.message)
    callback();
})
.catch(error => {
    console.error('There was an error!', error);
    alert(error.response.data.message)
    callback();
});
};
  
