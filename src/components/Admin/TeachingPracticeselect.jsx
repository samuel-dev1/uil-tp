import { useState } from 'react'
import { TPSelectStdSchool, TPChangeStdSchool, TPViewStdProfile, BackButton } from "../../components"


export const TeachingPracticeselect = ({ setStudentSelectTP }) => {
  const [tpOptions, setTpOptions] = useState("neutral");

  const handleBack = ()=> {
    setStudentSelectTP(null);
  }

  if(tpOptions === "selectSchool"){
    return(
      <>
       <TPSelectStdSchool setTpOptions={setTpOptions} />
      </>
    )
  } else if(tpOptions === "changeSchool"){
    return(
      <>
      <TPChangeStdSchool setTpOptions={setTpOptions} />
      </>
    )
  } else if(tpOptions === "viewProfile"){
    return(
      <>
       <TPViewStdProfile setTpOptions={setTpOptions} />
      </>
    )
  } else{
    return (
      <div className="w-full flex justify-center">
        <div className="w-4/5">
        <div className="w-full mt-12 flex justify-end">
        <BackButton handleBack={handleBack} />
        </div>
        <div className='w-full grid grid-cols-3 gap-4 mt-5'>
            <div>
            <div onClick={()=> setTpOptions("selectSchool")} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>Select Student School</h2>
            </div>
            </div>
            <div>
            <div onClick={()=> setTpOptions("changeSchool")} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>Change Student School</h2>
            </div>
            </div>
            <div>
            <div onClick={()=> setTpOptions("viewProfile")} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>View Student Profile</h2>
            </div>
            </div>
        </div>    
        </div>
      </div>
    )
  }
  }
  
  