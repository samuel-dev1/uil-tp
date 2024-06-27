import axios from 'axios';

export const searchForStudent = async (searchTerm) => {
  const token = JSON.parse(localStorage.getItem('token')); 
  try {
    const response = await axios.get('https://uil-tp.com.ng/admin/searc-for-std', {
      params: { serach: searchTerm },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching for student:', error);
    return null;
  }
};
