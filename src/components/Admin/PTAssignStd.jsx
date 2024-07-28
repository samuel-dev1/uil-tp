import { useState } from 'react';
import { Button, Input } from '../../components'



async function assignOberstiongroup(groupsize){

  const token = JSON.parse(localStorage.getItem("token"))
const url ="https://uil-tp.com.ng/smart/assign-observation-groups";

try{
  const response = await fetch(url,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`,
    },
    body:JSON.stringify(
      {
      groupSize:groupsize
      }
      ),
  });
  if(!response.ok){
    console.log(response.json())
  }
  const data = await response.json();
  if(data.message){
    console.log(data.message);
  }
  return data
}
catch(error){
  console.log("there is an error", error);

}

}
export const PTAssignStd = () => {
  const [number, changenumber] = useState(null)

  const handleChange =(event)=>{
    changenumber(event.target.value)
  }

  const handleSubmit=()=>{
    const assign = assignOberstiongroup(number)
    console.log(assign)
  }

  return (
    <div className="h-full w-full px-10 py-5">
        <h1 className="text-xl text-background2 font-semibold">Group Student To group</h1>
    <h1 className="text-xl text-black font-semibold mt-10">Click on the button below to group students randomly</h1>
    <h1 className="text-xl text-black font-semibold">for peer teaching assignment</h1>
    <Input
    value={number}
    handleInputChange={handleChange}
     placehold={"the max number to be in a  group"} />
<div className="mt-10">
        <Button handleSubmit={handleSubmit} label="Assign" />
    </div>
    </div>
  )
}

