import { Input, Button } from "../../components"
import Select from 'react-select'
import { useState, useEffect } from "react";
import { fetchSchoolList } from "../../services/admin/schoollogic/schoollogic";

export const AssignLtManually = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [lecturerId, setLecturerId] = useState('');
  
  const token  = JSON.parse(localStorage.getItem("token"));
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#D9D9D9",
      cursor: "pointer",
    }),
  };

  const handlesCHli = async () => {
    const data = await fetchSchoolList();
    if (data) {
      const formattedSchools = data.map(school => ({
        value: school.id,
        label: school.name
      }));
      setSchools(formattedSchools);
    }
  };

  useEffect(() => {
    handlesCHli();
  }, []);



const handdleSubmit = async(e)=>{
try{
const response =  await fetch('https://uil-tp.com.ng/admin/assign-lecture-sch',{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
    'Authorization': `Bearer ${token}`,
  },
  body:JSON.stringify({staff_id:lecturerId, school_id:selectedSchool.value})
});
const data  = await response.json()
if(response.ok){
alert(data.message)
}
}
catch{
  alert("an error occur")
}
}
  const handleInputChange = (event) => {
    setLecturerId(event.target.value);
  };
  const handleSchoolChange = (selectedOption) => {
    setSelectedSchool(selectedOption);
  };

  return (
    <div className="w-full py-10 px-12 h-auto">
      <div>
        <h1 className="text-xl font-bold mb-16 text-background2">Assign Lecturer To a Specific School</h1>
        <Input handleInputChange={handleInputChange} value={lecturerId} label="Lecturer/Staff Id" />
        <p className="mb-2">School</p>
        <Select 
          value={selectedSchool} 
          options={schools} 
          onChange={handleSchoolChange} 
          className='mb-4' 
          styles={customStyles} 
        />
      </div>
      <div className="flex justify-between flex-col lg:flex-row mt-5 lg:mt-10">
        <Button handleSubmit={handdleSubmit} label="Assign" />
      </div>
    </div>
  );
};
