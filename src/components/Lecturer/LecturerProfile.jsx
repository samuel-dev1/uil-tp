import { useState } from 'react'
import { Input } from '../../components'
import { updateBankDetails } from '../../services/supervisors/supervisors'

export const LecturerProfile = ()=> {
    const [phone, setPhonenumber] = useState("")
    const [email, setEmail] = useState("")
    const [account_name, setAccountname] = useState("")
    const [account_number, setAccountNumber] = useState("")
    const [bankname, setBankname] = useState("")
    const[supervisorDetails, setUpervisordetails] = useState(null)
    
const data = {
    phone:phone,
    email:email,
    account_name:account_name,
    account_number:account_number,
    bankname:bankname,
}
const handleUpdate=()=>{
   const superDetails =  updateBankDetails(data)
   if(superDetails){
    setUpervisordetails(superDetails)
  }

}

console.log(supervisorDetails)

const hadleAccountNumber =(event)=>{
    setAccountNumber(event.target.value)
  }
  const handleAccountName =(event)=>{
    setAccountname(event.target.value)
  }

const handleBankname =(event)=>{
    setBankname(event.target.value)
}
const handleEmail =(event)=>{
    setEmail(event.target.value)
}
const phoneSet =(event)=>{
    setPhonenumber(event.target.value)
}

return(
        <>
         <div className="h-full w-full p-10">
   <h1 className="text-4xl text-background2 font-semibold">My Profile</h1>

   <div className="flex lg:flex-row flex-col lg:w-4/5 w-full mt-8">
     <div className="w-full">
        <Input 
        bol={true}
        placeholder ={supervisorDetails?.full_name}  label="Name"  />
       <Input 
       bol={true}
       placeholder={supervisorDetails?.staff_number} label="staff id" />
       <Input
       value={phone} 
       bol={false}
       handleInputChange={phoneSet}
       placeholder={supervisorDetails?.phone_number} label="Phone Number" />
     </div>
     <div className="lg:mx-8 mx-0 w-full">
      <Input 
      bol={false}
      handleInputChange={handleEmail}
      label="Email" />
       <Input 
       bol={false}
      handleInputChange={hadleAccountNumber}
       label="Account number" />
       <Input 
       bol={false}
       handleInputChange={handleAccountName}
       label="Acount  name" />
       <Input 
       bol={false}
       handleInputChange={handleBankname}
       label="Bank name" />
     </div>
   </div>

     <button
     onClick={()=>handleUpdate()}
        className="text-white mt-8 py-3 px-10 rounded-xl bg-background2"
        >Edit and Profile</button>
  </div>
        </>
    )
}