import { useState } from "react"
import { AssignLtManually, AssignLtRandomly, LecturersList } from "../../components"

export const LecturerManagement = () => {
  const [ltSelect, setLtSelect] = useState("neutral");

  if(ltSelect === "manual"){
    return(
      <>
       <AssignLtManually setLtSelect={setLtSelect} />
      </>
    )
  } else if(ltSelect === "random"){
    return(
      <>
       <AssignLtRandomly setLtSelect={setLtSelect} />
      </>
    )
  } else if(ltSelect === "list"){
    return(
      <>
       <LecturersList setLtSelect={setLtSelect} />
      </>
    )
  }
  else{
    return (
      <div className="w-full flex justify-center">
        <div className='w-full grid lg:grid-cols-3 grid-cols-1 gap-4 mt-20 px-12'>
            <div>
            <div onClick={()=> setLtSelect("random")} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>Assign Lecturers Randomly</h2>
            </div>
            </div>
            <div>
            <div onClick={()=> setLtSelect("manual")} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>Assign Lecturers Manually</h2>
            </div>
            </div>  
            <div>
            <div onClick={()=> setLtSelect("list")} className='bg-background1 h-32 rounded-lg p-4 hover:bg-background2 hover:text-white cursor-pointer'>
            <h2 className='ml-2 mb-4 font-semibold'>Lecturer List</h2>
            </div>
            </div>  
        </div>
      </div>
    )
  } 
}