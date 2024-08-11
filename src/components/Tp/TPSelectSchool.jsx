import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Button, Input } from '../../components';
import { WindowReloader } from '../../components';

export const TPSelectSchool = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  const [locate, setLocate] = useState([]);
  const [subject, setSubject] = useState('');
  const [schools, setSchools] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedLocationsch, setSelectedSchool] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null);

  const fetchLocations = async () => {
    try {
      const response = await fetch(`https://uil-tp.com.ng/stud/get-locations`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseData = await response.json();
      if (responseData.data) {
        const formattedLocations = responseData.data.map(location => ({
          value: location.id,
          label: location.Address
        }));
        setLocate(formattedLocations);
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };


  useEffect(() => {
    fetchLocations();
  }, []);

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
    console.log(selectedOption);
  };


  const handleSubmit = async () => {
    const session = '2024/2025';
    try {
      const response = await fetch(`https://uil-tp.com.ng/stud/get-schools?locate=${selectedLocation.label}&session=${session}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseData = await response.json();
      const formattedLocations = responseData.data.map(school => ({
        value: school.id,
        label: school.name + " "+ school.address
      }));
      setSchools(formattedLocations);
      console.log(formattedLocations)

    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  const handleSelectChangeSch = (selectedOption) => {
    setSelectedSchool(selectedOption);
  };


  useEffect(() => {
    if (selectedLocation?.label) {
      handleSubmit();
    }
  }, [selectedLocation]);

  async function SelectSchool() {
    const session = '2024/2025';
    setLoader(true);
  
    try {
      const response = await fetch(`https://uil-tp.com.ng/stud/choose-school?session=${session}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id: selectedLocationsch.value,
          user_id: user?.id,
          subject: subject
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Alert success message
        alert(data.message);
      } else {
        // Alert error message
        alert(`Error: ${data.message || 'An error occurred'}`);
      }
    } catch (error) {
      // Alert a generic error message if an exception is thrown
      alert('An unexpected error occurred.');
    } finally {
      setLoader(false); // Ensure loader is turned off whether success or error
    }
  }
  

if (loader) {
  return (
    <>
      <WindowReloader />
    </>
  );
}
  return (
    <>
      <div className="w-full py-10 px-12 h-auto">
        <h1 className="text-3xl text-xl text-background2 font-semibold">Choose School For Teaching Practice</h1>
        <div className="mt-16">
        <div className="my-2 w-full">
          <marquee>
            <p style={{color:'red'}}>
            Please confirm your record at your dashboard to avoid lost of record and result(You can only pick once else contact your level adviser)
            </p>
          </marquee>
        <p className="mb-2">Select a Location</p>
          <Select
          isDisabled={user?.subject?true:false}
           styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: '#D9D9D9',
            }),
          }}
            className='mb-4 bg-background1'
            onChange={handleSelectChange}
            options={locate}
            value={selectedLocation}
          />
          </div>
         
          <div className="my-2 w-full">
          <p className="mb-2">Select School</p>
          <Select
           styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: '#D9D9D9',
            }),
          }}
          options={schools}
          value={selectedLocationsch}
          onChange={setSelectedSchool}
            className='mb-4 bg-transparent' />

            </div>
            <div className="my-2 w-full">
            <p className="mb-2">Input your Subject</p>
          <input
          disabled={user?.subject?true:false}
          onChange={(e)=> setSubject(e.target.value)}
            value={subject}
            placeholder={user?.subject}
            className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          </div>
        </div>
        <Button 
        off={user?.subject?true:false}
        handleSubmit={SelectSchool} label={user?.subject?null:"submit"} />
      </div>
  
    </>
  );
};
