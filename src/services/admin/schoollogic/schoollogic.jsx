import axios from 'axios';

export const fetchSchoolList = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token);

  try {
    const response = await axios.get('https://uil-tp.com.ng/admin/chose-school', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
   return error;
  }
};





