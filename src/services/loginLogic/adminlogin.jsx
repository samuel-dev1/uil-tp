import axios from 'axios';

export const fetchAdmin = async (values, navigate, callback) => {
  try {
    const response = await axios.post('https://uil-tp.com.ng/login/admin', {
      staff_id: values.staff_id,
      password: values.password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

   
    
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));


    navigate('/admin');
    alert(response.data.message);
    callback();
  } catch (error) {
    console.error('There was an error!', error);
    alert(error?.response?.data?.message || 'An error occurred');
    callback();
  }
};

  