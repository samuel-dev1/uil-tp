import { Checkbox } from '@material-tailwind/react';
import { useEffect, useState } from 'react'
import { TeachingPracticeselect, PeerTeachingselect } from '../../components'

export const StudentManagement = () => {
  const [studentSelectTP, setStudentSelectTP] = useState(null);

   const [close, setClose] = useState(false)

  function handleSetClose (){
    setClose(!close)
  }

  if(studentSelectTP){
    return(
      <>
      <TeachingPracticeselect setStudentSelectTP={setStudentSelectTP} />
      </>
    )
  } else if(studentSelectTP === false){
    return(
      <>
      <PeerTeachingselect setStudentSelectTP={setStudentSelectTP} />
      </>
    )
  } else if(studentSelectTP === null){
    return (
      <div className="w-full flex justify-center">
        <div className="w-4/5">
        <div className='w-full grid grid-cols-2 gap-4 mt-20'>
            <div>
            <div onClick={()=> setStudentSelectTP(true)} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>Teaching Practice</h2>
            </div>
            </div>
            <div>
            <div onClick={()=> setStudentSelectTP(false)} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>Peer Teaching</h2>
            </div>
           
            </div>
            
        </div>    
        </div>
      </div>
    )
  }
}

