import axios from 'axios';
import Select from 'react-select';
import { useEffect, useState } from 'react';

// Function to fetch students
export const fetchObstd = async () => {
  const token = JSON.parse(localStorage.getItem('token'));

  try {
    const response = await axios.get('https://uil-tp.com.ng/admin/get-studenst', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data; // Ensure this is the correct data you need
  } catch (error) {
    console.log(error);
    return null;
  }
};



export const fetchTpstd = async () => {
  const token = JSON.parse(localStorage.getItem('token'));

  try {
    const response = await axios.get('https://uil-tp.com.ng/admin/get-studensttp', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data; // Ensure this is the correct data you need
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchLET = async () => {
  const token = JSON.parse(localStorage.getItem('token'));

  try {
    const response = await axios.get('https://uil-tp.com.ng/admin/get-studenstlect', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data; // Ensure this is the correct data you need
  } catch (error) {
    console.log(error);
    return null;
  }
};





const locationOptions = [
  { value: '2023/2024 label', label: '2023/2024' },
  { value: '2024/2025', label: '2024/2025' },
  { value: '2024/2025', label: '2024/2025' }
];

export const AdminDashboard = () => {
  const [noObstd, setNObstd] = useState(null);
  const [noOftp, setNotp] = useState(null)
  const [noLect, Setlect]= useState(null)
  const handlefect = async () => {
    const data = await fetchObstd();
    if (data.data.count) {
      setNObstd(data.data.count); // Adjust according to your actual data structure
    }
  };



  const handlefect3 = async () => {
    const data = await fetchLET();
    if (data.data.count) {
      Setlect(data.data.count); // Adjust according to your actual data structure
    }
  };


  const handlefect2 = async () => {
    const data = await fetchTpstd();
    if (data.data.count) {
      setNotp(data.data.count); // Adjust according to your actual data structure
    }
  };


  useEffect(() => {
    handlefect3();
  }, []); 


  useEffect(() => {
    handlefect2();
  }, []); 



  useEffect(() => {
    handlefect();
  }, []); // Call `handlefect` on component mount


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
