import axios from 'axios';

export const fetchObstd = async () => {
  const token = JSON.parse(localStorage.getItem('token'));

  try {
    const response = await axios.get('https://uil-tp.com.ng/admin/get-studens', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response)
    return response;
  } catch (error) {
    console.log(error)
   return error;
  }
};





