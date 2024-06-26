import { useState } from 'react'
import { PTViewStdProfile, PTAssignStd} from '../../components'


export const PeerTeachingselect = () => {
  const [pTSelect, setPTSelect] = useState("neutral");

  if (pTSelect === "assignStd"){
    return(
      <>
       <PTAssignStd />
      </>
    )
  } else if(pTSelect === "viewStd"){
    return(
      <>
       <PTViewStdProfile />
      </>
    )
  } else{
    return (
      <div className="w-full flex justify-center">
        <div className="w-4/5">
        <div className='w-full grid grid-cols-2 gap-4 mt-20'>
            <div>
            <div onClick={()=> setPTSelect("assignStd")} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>Assign Student to Lecturer</h2>
            </div>
            </div>
            <div>
            <div onClick={()=> setPTSelect("viewStd")}className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>View Student</h2>
            </div>
            </div>
        </div>    
        </div>
      </div>
    )
  }
  }
  
  