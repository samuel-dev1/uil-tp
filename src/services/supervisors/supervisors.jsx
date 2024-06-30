
import axios from 'axios';

export const updateBankDetails = async (values) => {

   alert ( values.Authorization)
  const token = JSON.parse(localStorage.getItem('token')); 
  const staffId = JSON.parse(localStorage.getItem('staf_id'));
  try {
    const response = await axios.post(
      `https://uil-tp.com.ng/lecture/update-banks?staff_id=${staffId}`,
      {
        account_number:values.account_number,
        account_name:values.account_name,
        department: values.department,
        email:values.email,
        bankname:values.bankname,
        phone:values.phone
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Ensure the token is included in the request headers
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating bank details:', error);
    return null;
  }
};
