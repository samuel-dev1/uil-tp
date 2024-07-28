

import axios from 'axios';
export const fetchSupervisors = async (values, navigate, callback) => {
    
          try {
            const response = axios.post('https://uil-tp.com.ng/login/supervisor-login', {
              staff_id: values.staff_id,
              password: values.password
            }, {
              headers: {
                'Content-Type': 'application/json',
              }
            }).then(response => {
                localStorage.setItem("token", JSON.stringify(response?.data?.token));
                localStorage.setItem("user", JSON.stringify(response?.data?.user));
                navigate('/lecturer');
                alert(response?.data?.message)
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert(error.response?.data?.message)
            });
          } catch (error) {
            console.error('There was an error!', error);
            alert(error?.response?.data?.message || 'An error occurred');
            callback();
          }
        };
        
          
