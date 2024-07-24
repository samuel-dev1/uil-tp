import Select from 'react-select'
import { Button } from "../../components"


const locationOptions = [
  { value: '2023/2024 label', label: '2023/2024' },
  { value: '2024/2025', label: '2024/2025' },
  { value: '2024/2025', label: '2024/2025' }
]
async function handleOpenClose(){
  const token = JSON.parse(localStorage.getItem('token'));
try{
const response = await fetch('/start-session',{
method:"POST",
headers:{
  'Content-Type':'application/json',
  'Authorization': `Bearer ${token}`
},
body:JSON.stringify({ssession}),
});
const result = await response.json();
if(response.ok){
console.log(response)
}

}
catch(e){
console.log(e)
}
}

export const AdminSessionManagement = () => {

    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "#D9D9D9",
        }),
      };

      function modalAsk(question) {
        let answer = prompt(question + " (Yes/No)");
    
        // Normalize the answer to lowercase to handle different cases
        answer = answer.toLowerCase();
    
        // Validate the answer
        if (answer === "yes") {
          handleOpenClose()
            return;
        } else if (answer === "no") {
            return;
        } else {
            return;
        }
    }

    const handleSessionStartModal = ()=> {
        modalAsk("Are you sure you want to start the session");
    }
    const handleSessionCloseModal = ()=> {
        modalAsk("Are you sure you want to close the session");
    }

  return (
    <div className="w-full py-10 px-12 h-auto">
    <div>
         <h1 className="text-xl font-bold mb-8 text-background2">Session Management</h1>
         <h1 className="text-xl text-black font-semibold mt-5">Click on the button below to start or close a session</h1>
         <h1 className="text-xl text-black font-semibold mt-3">Start a Session</h1>
         <div className='flex items-center mt-4'>
            <p className='mr-4'>To start a session, select a session to start</p>
          <Select options={locationOptions} styles={customStyles} className='bg-background1' />
          </div>
          <div className="flex justify-between flex-col lg:flex-row mt-1 lg:mt-2">
     <Button handleSubmit={handleSessionStartModal} label="Start Session" />
   </div>
    </div>
    <div className='mt-8'>
    <h1 className="text-xl text-black font-semibold">Close a Session</h1>
    <div className='flex items-center mt-1'>
            <p className='mr-4'>To close a session, select a session to close</p>
          <Select options={locationOptions} styles={customStyles} className='bg-background1' />
          </div>
          <div className="flex justify-between flex-col lg:flex-row mt-1 lg:mt-0">
     <Button handleSubmit={handleSessionCloseModal} label="Close Session" />
   </div>

    </div>
    </div>
  )
}

