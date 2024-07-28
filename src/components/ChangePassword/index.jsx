import { useState } from 'react'
import { Button , Input} from '../../components'


export const ChangePassword = () => {
const [password, setPaasward] = useState('')
const [newPassword, setNewpassord] = useState('')
const [oldPassword, setOldpaasward]= useState('')

const user = JSON.parse(localStorage.getItem("user"))
const token = JSON.parse(localStorage.getItem("token"))


const handlechange=(event)=>{
  setPaasward(event.target.value)
}

const handlechange2=(event)=>{
  setNewpassord(event.target.value)
}
const handlechange3=(event)=>{
  setOldpaasward(event.target.value)
}





const CheckResponse =async()=>{

  if(newPassword == password){
  const response = await fetch(`https://uil-tp.com.ng/manage/change-password`, {
    method: "POST",
    body:JSON.stringify({
      oldPassword:password,
      newPassword:newPassword,
      id:user?.id
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}
else{
  console.log("password did not match")
}

  console.log(response.json())
  
}



  return (
    <>
       <div className="h-full w-full p-10 flex flex-col">
    <h1 className="text-4xl mb-3 text-background2 font-semibold text-center mt-16">Choose a Password</h1>
    <h1 className="text-2xl font-bold mb-4 text-center">Must be 9 characters</h1>

    <div className="flex items-center justify-center justify-self-center  self-center flex-col lg:w-3/5 w-full">
      <Input 
      label={"old password"}
      placehold={"Enter old passord"}
      error={"incase you login in for the first time please use your lastname"}
      handleInputChange={handlechange3}
      value={oldPassword}

      className="bg-background1 my-3 md:w-4/5 w-4/5 p-3 rounded-3xl italic" placeholder="Provide old password" type="password"  />
      <Input 
      handleInputChange={handlechange}
      value={password}
      label={"New passsword"}
      placehold={"enter new passord"}
        className="bg-background1 my-3 md:w-4/5 w-4/5 p-3 rounded-3xl italic" placeholder="Password" type="password" />
        <Input
         placehold={"Re enter new passord"}
        label={"Old password"}
handleInputChange={handlechange2}
value={newPassword}
        className="my-3 md:w-4/5 w-4/5 p-3 rounded-3xl italic bg-background1"
         placeholder="Confirm Password" type="password" />
         <Button handleSubmit={CheckResponse} label="Change Password"/>
    </div>

  </div>
    </>
  )
}
