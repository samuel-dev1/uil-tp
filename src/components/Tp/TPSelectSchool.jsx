import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Button, Input } from '../../components';

export const TPSelectSchool = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  const [locate, setLocate] = useState([]);
  const [subject, setSubject] = useState('');
  const [schools, setSchools] = useState([]);
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
}
else{
  console.log(data)
}
}
catch{

}
}



  return (
    <>
      <div className="w-full py-10 px-12 h-auto">
        <h1 className="text-3xl text-xl text-background2 font-semibold">Choose School For Teaching Practice</h1>
        <div className="mt-16">
          <Select
            className='mb-4 bg-background1'
            onChange={handleSelectChange}
            options={locate}
            value={selectedLocation}
            placeholder="Select a location"
          />
          {/* Example of another Select component */}
          {/* Ensure to replace this placeholder with your actual Select component */}
          <Select
          options={schools}
          value={selectedLocationsch}
          onChange={setSelectedSchool}
          placeholder={schools.length ==0?"pick a favourable pick ..":"select school"}
            className='mb-4 bg-transparent' />
          <Input
          
            error={"Make sure you are writing an offered subject (e.g., computer studies not computer science)"}
            label={"Write your subject (e.g., computer studies)"}
            placeholder={"Input a subject"}
            value={subject}
            handleInputChange={handleChange}
            className='mb-4 bg-background1'
          />
        </div>
        <Button handleSubmit={SelectSchool} label="Submit" />
      </div>
    </>
  );
};
