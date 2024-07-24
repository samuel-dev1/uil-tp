import axios from 'axios';
import Select from 'react-select';
import { useEffect, useState } from 'react';

// Function to fetch data
const fetchData = async (url) => {
  const token = JSON.parse(localStorage.getItem('token'));

  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data; // Ensure this is the correct data structure
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const locationOptions = [
  { value: '2023/2024', label: '2023/2024' },
  { value: '2024/2025', label: '2024/2025' },
  { value: '2025/2026', label: '2025/2026' }
];

export const AdminDashboard = () => {
  const [noObstd, setNoObstd] = useState(null);
  const [noOftp, setNoOftp] = useState(null);
  const [noLect, setNoLect] = useState(null);
  const [noOfsch, setSchool] = useState(null)

  const fetchObstd = async () => {
    const data = await fetchData('https://uil-tp.com.ng/admin/get-studenst');
    if (data?.data?.count) {
      setNoObstd(data.data.count); // Adjust according to your actual data structure
    }
  };

  const fetchTpstd = async () => {
    const data = await fetchData('https://uil-tp.com.ng/admin/get-studensttp');
    if (data?.data?.count) {
      setNoOftp(data.data.count); // Adjust according to your actual data structure
    }
  };

  const fetchLET = async () => {
    const data = await fetchData('https://uil-tp.com.ng/admin/get-studenstlect');
    if (data?.data?.count) {
      setNoLect(data.data.count); // Adjust according to your actual data structure
    }
  };

  useEffect(() => {
    fetchLET();
    fetchTpstd();
    fetchObstd();
  }, []); // Call fetch functions on component mount

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#D9D9D9",
    }),
  };

  return (
    <div className="h-full w-full p-10">
      <div className='flex justify-end'>
        <div className='w-2/5 flex items-center justify-center'>
          <p className='mr-4'>Session</p>
          <Select options={locationOptions} styles={customStyles} className='bg-background1' />
        </div>
      </div>

      <div className='w-full grid grid-cols-3 gap-4 mt-20'>
        <div>
          <h2 className='ml-2 mb-4 font-semibold'>Teaching Practice</h2>
          <div className='bg-background1 h-32 rounded-lg p-4'>
            <p className='mb-10'>No of students</p>
            <p>{noOftp}</p>
          </div>
        </div>
        <div>
          <h2 className='ml-2 mb-4 font-semibold'>Peer Teaching</h2>
          <div className='bg-background1 h-32 rounded-lg p-4'>
            <p className='mb-10'>No of students</p>
            <p>{noObstd}</p>
          </div>
        </div>
        <div>
          <h2 className='ml-2 mb-4 font-semibold'>Lecturer</h2>
          <div className='bg-background1 h-32 rounded-lg p-4'>
            <p className='mb-10'>No of Lecturers</p>
            <p>{noLect}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
