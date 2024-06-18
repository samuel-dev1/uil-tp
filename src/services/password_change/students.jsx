

//admin will also use this to change student 
import axios from 'axios';
export const fetchPasswordChange = async (values) => {
    /* pass old password and newpassword together with the id  */
  axios.post('https://uil-tp.com.ng/manage/change-password', {
    oldPassword: "data hre",
    newPassword: "data here",
    id: "3"
}, {
    headers: {
        'Content-Type': 'application/json',
        //you will have to passed the token down here also 
        
         "token":`Bearer ${values.axiostoken}`
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
  