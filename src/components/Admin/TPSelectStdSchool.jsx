import { useEffect, useState } from 'react';
import { Input, Button } from '../../components';
import Select from 'react-select';
import { adminSelectTPSch } from '../../services/adminForTP';
import { fetchSchoolList } from '../../services/admin/schoollogic/schoollogic';
import { chooseSchoolTwo } from '../../services/admin/schoollogic/schoollogic2';
import { data } from 'autoprefixer';

export const TPSelectStdSchool = () => {
  const [matricNumber, setMatricNumber] = useState('');
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [schlist, setSchoolist] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null);


  const data={
    matricNumber:matricNumber,
    schoolId:selectedSchool?.id,
  }


function handleMatricandschon(){
  
  const data  = chooseSchoolTwo(data);
  console.log(data)

}



  useEffect(() => {
      const getSchools = async () => {
        try {
          const data = await fetchSchoolList();
        if(data.response.data.error){
          alert(`section expires login again?`)
        }
        setSchoolist(data)

        } catch (error) {
          console.log(error)
        }
      };

      getSchools();
    }, []);
    
    // console.log(schlist)


  const schoolOptions = [
    { value: 'Air Foundation School', label: 'Air Foundation School' },
    { value: 'Earth Foundation School', label: 'Earth Foundation School' },
    { value: 'Water Foundation School', label: 'Water Foundation School' },
  ];

  const subjectOptions = [

    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Physics', label: 'Physics' },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: '#D9D9D9',
      cursor: 'pointer',
    }),
  };

  const handleMatricNumberChange = (e) => {
    setMatricNumber(e.target.value);
  };

  const handleSchoolChange = (selectedOption) => {
    setSelectedSchool(selectedOption);
  };

  const handleSubjectChange = (selectedOption) => {
    setSelectedSubject(selectedOption);
  };

  // const handleSubmit = () => {
  //   if(selectedSchool?.value === "" || matricNumber === "" || selectedSubject?.value === ""){
  //     return;
  //   }
  //   const data = {
  //     school_id: selectedSchool?.value,
  //     matric_number: matricNumber,
  //     subject: selectedSubject?.value,
  //   };
  // adminSelectTPSch(data);
  // }

  return (
    <div className="w-full py-10 px-12 h-auto">
      <div>
        <h1 className="text-xl font-bold mb-8 text-background2">Select Student School</h1>
        <Input label="Matric No" value={matricNumber} handleInputChange={handleMatricNumberChange} />
        <p className="mb-2">School</p>
        <Select options={schoolOptions} className="mb-4" styles={customStyles} onChange={handleSchoolChange} />
        <p className="mb-2">Teaching Subject</p>
        <Select options={subjectOptions} className="mb-4" styles={customStyles} onChange={handleSubjectChange} />
      </div>
      <div className="flex justify-between flex-col lg:flex-row mt-5 lg:mt-10">
        <Button label="Select" handleSubmit={()=>handleMatricandschon()} />
      </div>
    </div>
  );
};
