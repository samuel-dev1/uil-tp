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

  // Fetch locations from API and format them for Select options
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

  // Load locations on component mount
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

async function SelectSchool (){
  const session = '2024/2025'
  setLoader(true);
try{
const response  =  await fetch(`https://uil-tp.com.ng/stud/choose-school?session=${session}`,{
  method:"POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body:JSON.stringify({
    id:selectedLocationsch.value,
    user_id:user?.id,
    subject:subject
  })
})
const data  = response.json()
if(response.ok){
  console.log(data)
  setLoader(false);
}
else{
  console.log(data)
  setLoader(false);
}
}
catch{

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
        <p className="mb-2">Select a Location</p>
          <Select
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
          onChange={(e)=> setSubject(e.target.value)}
            value={subject}
            className="w-full bg-background1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          </div>
        </div>
        <Button handleSubmit={SelectSchool} label="Submit" />
      </div>
    </>
  );
};
