




//point directly to this url 
//returns a complete webpage
import axios from 'axios';
export const fetchUploadsupervisor = async (values) => {
    
  axios.get('https://uil-tp.com.ng/auth/upload-supervisor', {
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
  