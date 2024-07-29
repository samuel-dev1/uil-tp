import { useState } from 'react';
import { Button, BackButton } from '../../components'
import { WindowReloader } from '../WindowReloader'


const token  = JSON.parse(localStorage.getItem("token"))

async function AsignsuperToSchol(setLoader){
  const url ="https://uil-tp.com.ng/smart/assign-supervisors-to-all-schools";
  setLoader(true);
  try{
    const response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
    });
    const data = await response.json();
    alert(data.message);
    setLoader(false);
  }
  
  catch(error){
    alert("Error Assigning Supervisor");
    setLoader(false);
    console.log(error)
  }

}

async function AsignsuperObSchol(setLoader){
  const url ="https://uil-tp.com.ng/smart/assign-observation-lecturer";
  setLoader(true);
  try{
    const response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
    });
    const data = await response.json();
    alert(data.message);
    setLoader(false);
  }
  
  catch(error){
    setLoader(false);
    alert("Error Assigning Supervisor");
console.log(error)
  }

}

export const AssignLtRandomly = ({ setLtSelect }) => {
  const [loader, setLoader] = useState(false);
  const handleBack = ()=> {
    setLtSelect('neutral');
  }

  if (loader) {
    return (
      <>
        <WindowReloader />
      </>
    );
  }
  return (
    <div className="h-full w-full px-10 py-5">
      <div className="w-full mt-12 flex justify-end">
        <BackButton handleBack={handleBack} />
        </div>
    <h1 className="text-xl text-background2 font-semibold">Assign Lecturers Randomly</h1>
<h1 className="text-xl text-black font-semibold mt-5">Click on the button below to assign lecturers to schools randomly</h1>
<h1 className="text-xl text-black font-semibold">for teaching practice assessment</h1>
<div className="mt-5">
    <Button handleSubmit={()=> AsignsuperToSchol(setLoader)} label="Assign Lecturers" />
</div>

<h1 className="text-xl text-black font-semibold mt-5">Click on the button below to assign lecturers to observation randomly</h1>
<h1 className="text-xl text-black font-semibold">for Pear teaching assessment</h1>
<div className="mt-5">
    <Button handleSubmit={()=> AsignsuperObSchol(setLoader)} label="Assign Lecturers" />
</div>

</div>
  )
}
