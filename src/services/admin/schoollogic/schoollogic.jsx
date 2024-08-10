import axios from 'axios';

export const fetchSchoolList = async (page = 1, pageSize = 20) => {
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token);

  try {
    const response = await axios.get(`https://uil-tp.com.ng/admin/chose-school?page=${page}?pageSize=${pageSize}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      params: {
        page: page,
        pageSize: pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching school list:", error);
    return error;
  }
};
