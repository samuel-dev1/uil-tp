import { Button } from '../../components'
const token  = JSON.parse(localStorage.getItem("token"))


async function AsignsuperToSchol(){
  const url ="https://uil-tp.com.ng/smart/assign-supervisors-to-all-schools";
  try{
    const response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
    });
    if(!response.ok){
      console.log(response.json())
      return response
    }
    const data = await response.json();
    if(data.messgae){
      console.log(data)
      console.log(data)
    }
    console.log(data)
    return data;
  }
  
  catch(error){
console.log(error)
  }

}

async function AsignsuperObSchol(){
  const url ="https://uil-tp.com.ng/smart/assign-observation-lecturer";
  try{
    const response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
    });
    if(!response.ok){
      console.log(response.json())
      return response
    }
    const data = await response.json();
    if(data.message){
      console.log(data)
      console.log(data)
    }
    console.log(data)
    return data;
  }
  
  catch(error){
console.log(error)
  }

}

export const AssignLtRandomly = () => {

  return (
    <div className="h-full w-full px-10 py-5">
    <h1 className="text-xl text-background2 font-semibold">Assign Lecturers Randomly</h1>
<h1 className="text-xl text-black font-semibold mt-10">Click on the button below to assign lecturers to schools randomly</h1>
<h1 className="text-xl text-black font-semibold">for teaching practice assessment</h1>
<div className="mt-10">
    <Button handleSubmit={AsignsuperToSchol} label="Assign Lecturers" />
</div>

<h1 className="text-xl text-background2 font-semibold">Assign Lecturers Randomly</h1>
<h1 className="text-xl text-black font-semibold mt-10">Click on the button below to assign lecturers to observation randomly</h1>
<h1 className="text-xl text-black font-semibold">for Pear teaching assessment</h1>
<div className="mt-10">
    <Button handleSubmit={AsignsuperObSchol} label="Assign Lecturers" />
</div>

</div>
  )
}
