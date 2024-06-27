


//admin will also use this to upload status too
import axios from 'axios';
export const fetchSupervisorsChange = async (values) => {
    /* pass old password and newpassword together with the id  */
  axios.post('https://uil-tp.com.ng/manage/change-password-supervisors', {
    oldPassword: values.oldPassword,
    newPassword: values.newPassword,
    id: values.id //student supervisor  id should be passed here
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

  