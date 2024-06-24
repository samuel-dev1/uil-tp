import Select from 'react-select'

const locationOptions = [
  { value: '2023/2024 label', label: '2023/2024' },
  { value: '2024/2025', label: '2024/2025' },
  { value: '2024/2025', label: '2024/2025' }
]
  
  export const AdminDashboard = () => {

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
             <p>20000</p>
          </div>
          </div>
          <div>
            <h2 className='ml-2 mb-4 font-semibold'>Peer Teaching</h2>
          <div className='bg-background1 h-32 rounded-lg p-4'>
          <p className='mb-10'>No of students</p>
             <p>20000</p>
          </div>
          </div>
          <div>
            <h2 className='ml-2 mb-4 font-semibold'>Lecturer</h2>
          <div className='bg-background1 h-32 rounded-lg p-4'>
          <p className='mb-10'>No of Lecturers</p>
             <p>20000</p>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  