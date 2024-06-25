import { Input, Button } from "../../components"
import Select from 'react-select'

export const TPChangeStdSchool = () => {
    const schoolOptions = [
        { value: 'Air Foundation School', label: 'Air Foundation School' },
        { value: 'Earth Foundation Schoole', label: 'Earth Foundation School' },
        { value: 'Water Foundation School', label: 'Water Foundation School' }
      ]
    
      const subjectOptions = [
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'Chemistry', label: 'Chemistry' },
        { value: 'Physics', label: 'Physics' }
      ]
    
      const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "#D9D9D9",
          cursor: "pointer",
        }),
      };

  return (
    <>
    <div className="w-full py-10 px-12 h-auto">
   <div>
     <h1 className="text-xl font-bold mb-16 text-background2">Change Student School</h1>
     <Input label="Matric No" />
     <p className="mb-2">Change School to</p>
       <Select options={schoolOptions} className='mb-4' styles={customStyles} />
     <p className="mb-2">Teaching Subject</p>
       <Select options={subjectOptions} className='mb-4' styles={customStyles} /> 
   </div>
   
   <div className="flex justify-between flex-col lg:flex-row mt-5 lg:mt-10">
     <Button label="Select" />
   </div>
  </div>
   </>
  )
}

